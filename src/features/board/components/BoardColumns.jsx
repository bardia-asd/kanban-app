import { useEffect } from "react";
import { useBoardStore } from "../store/useBoardStore";
import BoardColumn, {
    BoardColumnEmpty,
    BoardColumnError,
    BoardColumnSkeleton,
} from "./BoardColumn";

const BoardColumns = () => {
    const columns = useBoardStore((s) => s.columns);
    const isLoading = useBoardStore((s) => s.isLoading);
    const error = useBoardStore((s) => s.error);
    const fetchColumns = useBoardStore((s) => s.fetchColumns);

    useEffect(() => {
        fetchColumns();
    }, []);

    return (
        <div className="flex gap-4 overflow-x-auto pb-3">
            {isLoading && <BoardColumnSkeleton />}

            {error && (
                <BoardColumnError message={error} onRetry={fetchColumns} />
            )}

            {!isLoading && !error && columns.length === 0 && (
                <BoardColumnEmpty />
            )}

            {!isLoading &&
                !error &&
                columns.length > 0 &&
                columns.map((col) => <BoardColumn key={col.id} col={col} />)}
        </div>
    );
};

export default BoardColumns;
