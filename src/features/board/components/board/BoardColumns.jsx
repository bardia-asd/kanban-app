import { useEffect, useState } from "react";
import { useBoardStore } from "@/features/board/store/useBoardStore";
import { useTasksStore } from "@/features/board/store/useTasksStore";
import BoardColumn, {
    BoardColumnEmpty,
    BoardColumnError,
    BoardColumnSkeleton,
} from "../board/BoardColumn";
import DeleteColumnAlertDialog from "./DeleteColumnAlertDialog";
import RenameColumnDialog from "./RenameColumnDialog";

const BoardColumns = () => {
    const columns = useBoardStore((s) => s.columns);
    const isLoading = useBoardStore((s) => s.fetchLoading);
    const error = useBoardStore((s) => s.error);
    const fetchColumns = useBoardStore((s) => s.fetchColumns);
    const createColumn = useBoardStore((s) => s.createColumn);

    const fetchTasks = useTasksStore((s) => s.fetchTasks);

    const [renameColumn, setRenameColumn] = useState(null);
    const [deleteColumn, setDeleteColumn] = useState(null);

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
    }, []);

    return (
        <>
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
                            onRename={() => setRenameColumn(col)}
                            onDelete={() => setDeleteColumn(col)}
                        />
                    ))}
            </div>

            <DeleteColumnAlertDialog
                column={deleteColumn}
                open={!!deleteColumn}
                onOpenChange={(open) => {
                    if (!open) setDeleteColumn(null);
                }}
            />

            <RenameColumnDialog
                column={renameColumn}
                open={!!renameColumn}
                onOpenChange={(open) => {
                    if (!open) setRenameColumn(null);
                }}
            />
        </>
    );
};

export default BoardColumns;
