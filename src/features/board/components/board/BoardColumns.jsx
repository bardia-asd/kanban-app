import { useEffect, useMemo, useRef, useState } from "react";

import { DragDropProvider } from "@dnd-kit/react";
import { toast } from "sonner";

import { useBoardStore } from "@/features/board/store/useBoardStore";
import { useTasksStore } from "@/features/board/store/useTasksStore";
import { useBoardUIStore } from "@/features/board/store/useBoardUIStore";

import BoardColumn, {
    BoardColumnEmpty,
    BoardColumnError,
    BoardColumnSkeleton,
} from "@/features/board/components/board/BoardColumn";
import DeleteColumnAlertDialog from "@/features/board/components/board/DeleteColumnAlertDialog";
import RenameColumnDialog from "@/features/board/components/board/RenameColumnDialog";
import DeleteTaskAlertDialog from "@/features/board/components/tasks/DeleteTaskAlertDialog";
import UpdateTaskDrawer from "@/features/board/components/tasks/UpdateTaskDrawer";

const BoardColumns = () => {
    const dragSnapshot = useRef(null);

    // Board columns and their loading/error states.
    const columns = useBoardStore((s) => s.columns);
    const isLoading = useBoardStore((s) => s.fetchLoading);
    const error = useBoardStore((s) => s.error);
    const fetchColumns = useBoardStore((s) => s.fetchColumns);
    const createColumn = useBoardStore((s) => s.createColumn);

    // Tasks and task actions.
    const tasks = useTasksStore((s) => s.tasks);
    const fetchTasks = useTasksStore((s) => s.fetchTasks);
    const moveTaskLocal = useTasksStore((s) => s.moveTaskLocal);
    const persistTaskOrder = useTasksStore((s) => s.persistTaskOrder);

    // Board search and priority filter.
    const searchQuery = useBoardUIStore((s) => s.searchQuery);
    const priorityFilter = useBoardUIStore((s) => s.priorityFilter);

    // Filter tasks and group them by their column.
    const tasksByColumn = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();

        const filtered = tasks.filter((t) => {
            const matchesQuery =
                !q ||
                t.title.toLowerCase().includes(q) ||
                t.description?.toLowerCase().includes(q);

            const matchesPriority =
                priorityFilter === "all" || t.priority === priorityFilter;

            return matchesQuery && matchesPriority;
        });

        const map = {};

        for (const col of columns) {
            map[col.id] = filtered
                .filter((t) => t.column_id === col.id)
                .sort((a, b) => a.position - b.position);
        }

        return map;
    }, [tasks, columns, searchQuery, priorityFilter]);

    const handleDragStart = () => {
        dragSnapshot.current = useTasksStore.getState().tasks.map((task) => ({
            ...task,
        }));
    };

    const handleDragEnd = async (event) => {
        if (event.canceled) {
            if (dragSnapshot.current) {
                useTasksStore.setState({
                    tasks: dragSnapshot.current,
                });
            }

            dragSnapshot.current = null;
            return;
        }

        const finalTasks = useTasksStore.getState().tasks;

        const result = await persistTaskOrder(finalTasks, dragSnapshot.current);

        if (!result.success) {
            if (dragSnapshot.current) {
                useTasksStore.setState({
                    tasks: dragSnapshot.current,
                });
            }

            toast.error(result.error || "خطا در ذخیره ترتیب وظایف");
        }

        dragSnapshot.current = null;
    };

    const handleDragOver = (event) => {
        const { source, target } = event.operation;

        if (!source || !target) return;

        if (searchQuery || priorityFilter !== "all") {
            return;
        }

        const currentTasks = useTasksStore.getState().tasks;

        const sourceTask = currentTasks.find((task) => task.id === source.id);

        if (!sourceTask) return;

        const sourceColumnId = sourceTask.column_id;
        const targetColumnId = target.group ?? target.id;

        const targetIndex = target.index ?? 0;

        if (sourceColumnId === targetColumnId) {
            const columnTasks = currentTasks
                .filter((task) => task.column_id === targetColumnId)
                .sort((a, b) => a.position - b.position);

            const sourceIndex = columnTasks.findIndex(
                (task) => task.id === source.id,
            );

            if (sourceIndex === -1) return;

            if (
                sourceIndex === targetIndex ||
                sourceIndex === targetIndex - 1
            ) {
                return;
            }
        }

        moveTaskLocal({
            sourceId: source.id,
            targetColumnId,
            targetIndex,
        });
    };

    // Dialog and inline task creation states.
    const [renameColumn, setRenameColumn] = useState(null);
    const [deleteColumn, setDeleteColumn] = useState(null);
    const [addingColumnId, setAddingColumnId] = useState(null);

    // Create a new board column.
    const handleAddColumn = async () => {
        const result = await createColumn();

        if (result.success) {
            toast.success("ستون با موفقیت اضافه شد");
        } else {
            toast.error(result.error || "خطا در افزودن ستون");
        }
    };

    // Fetch columns and tasks when the board is mounted.
    useEffect(() => {
        fetchColumns();
        fetchTasks();
    }, [fetchColumns, fetchTasks]);

    return (
        <DragDropProvider
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}>
            <div className="flex gap-4 overflow-x-auto pb-3">
                {isLoading && <BoardColumnSkeleton />}

                {error && (
                    <BoardColumnError message={error} onRetry={fetchColumns} />
                )}

                {!isLoading && !error && columns.length === 0 && (
                    <BoardColumnEmpty onAddColumn={handleAddColumn} />
                )}

                {!isLoading &&
                    !error &&
                    columns.length > 0 &&
                    columns.map((col) => (
                        <BoardColumn
                            key={col.id}
                            col={col}
                            tasks={tasksByColumn[col.id] ?? []}
                            isAdding={addingColumnId === col.id}
                            onStartAdding={() => setAddingColumnId(col.id)}
                            onStopAdding={() => setAddingColumnId(null)}
                            onRename={() => setRenameColumn(col)}
                            onDelete={() => setDeleteColumn(col)}
                        />
                    ))}
            </div>

            {/* Column deletion confirmation dialog. */}
            <DeleteColumnAlertDialog
                column={deleteColumn}
                open={!!deleteColumn}
                onOpenChange={(open) => {
                    if (!open) {
                        setDeleteColumn(null);
                    }
                }}
            />

            {/* Column rename dialog. */}
            <RenameColumnDialog
                column={renameColumn}
                open={!!renameColumn}
                onOpenChange={(open) => {
                    if (!open) {
                        setRenameColumn(null);
                    }
                }}
            />

            {/* Task deletion confirmation dialog. */}
            <DeleteTaskAlertDialog />

            {/* Task editing drawer. */}
            <UpdateTaskDrawer />
        </DragDropProvider>
    );
};

export default BoardColumns;
