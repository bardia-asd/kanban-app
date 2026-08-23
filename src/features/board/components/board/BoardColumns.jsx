import { useEffect, useState } from "react";

import { DragDropProvider } from "@dnd-kit/react";
import { toast } from "sonner";

import { useBoardStore } from "@/features/board/store/useBoardStore";
import { useTasksStore } from "@/features/board/store/useTasksStore";
import BoardColumn, {
    BoardColumnEmpty,
    BoardColumnError,
    BoardColumnSkeleton,
} from "@/features/board/components/board/BoardColumn";
import DeleteColumnAlertDialog from "@/features/board/components/board/DeleteColumnAlertDialog";
import RenameColumnDialog from "@/features/board/components/board/RenameColumnDialog";
import DeleteTaskAlertDialog from "../tasks/DeleteTaskAlertDialog";

const BoardColumns = () => {
    const columns = useBoardStore((s) => s.columns);
    const isLoading = useBoardStore((s) => s.fetchLoading);
    const error = useBoardStore((s) => s.error);

    const fetchColumns = useBoardStore((s) => s.fetchColumns);
    const createColumn = useBoardStore((s) => s.createColumn);

    const fetchTasks = useTasksStore((s) => s.fetchTasks);
    const moveTask = useTasksStore((s) => s.moveTask);

    const handleDragEnd = async (event) => {
        if (event.canceled) return;

        const { source, target } = event.operation;

        if (!source || !target) return;

        const newColumnId = target.group ?? target.id;
        const newPosition = target.index ?? 0;

        await moveTask(source.id, {
            newColumnId,
            newPosition,
        });
    };

    const [renameColumn, setRenameColumn] = useState(null);
    const [deleteColumn, setDeleteColumn] = useState(null);
    const [addingColumnId, setAddingColumnId] = useState(null);

    const handleAddColumn = async () => {
        const result = await createColumn();

        if (result.success) {
            toast.success("ستون با موفقیت اضافه شد");
        } else {
            toast.error(result.error || "خطا در افزودن ستون");
        }
    };

    useEffect(() => {
        fetchColumns();
        fetchTasks();
    }, [fetchColumns, fetchTasks]);

    return (
        <DragDropProvider onDragEnd={handleDragEnd}>
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
                            isAdding={addingColumnId === col.id}
                            onStartAdding={() => setAddingColumnId(col.id)}
                            onStopAdding={() => setAddingColumnId(null)}
                            onRename={() => setRenameColumn(col)}
                            onDelete={() => setDeleteColumn(col)}
                        />
                    ))}
            </div>

            <DeleteColumnAlertDialog
                column={deleteColumn}
                open={!!deleteColumn}
                onOpenChange={(open) => {
                    if (!open) {
                        setDeleteColumn(null);
                    }
                }}
            />

            <RenameColumnDialog
                column={renameColumn}
                open={!!renameColumn}
                onOpenChange={(open) => {
                    if (!open) {
                        setRenameColumn(null);
                    }
                }}
            />

            <DeleteTaskAlertDialog />
        </DragDropProvider>
    );
};

export default BoardColumns;
