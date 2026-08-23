import { useState } from "react";
import { useShallow } from "zustand/react/shallow";
import PropTypes from "prop-types";
import { ChevronDown, ChevronUp, MoreHorizontal, Plus } from "lucide-react";
import { useTasksStore } from "@/features/board/store/useTasksStore";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { formatNumberFa } from "@/utils/formatter";

import TaskCard from "@/features/board/components/tasks/TaskCard";
import TaskCardEmpty from "@/features/board/components/tasks/states/TaskCardEmpty";
import { useDroppable } from "@dnd-kit/react";
import { cn } from "@/utils/utils";

const BoardColumn = ({ col, onRename, onDelete }) => {
    const [collapsed, setCollapsed] = useState(false);

    const tasks = useTasksStore(
        useShallow((s) =>
            s.tasks
                .filter((t) => t.column_id === col.id)
                .sort((a, b) => a.position - b.position),
        ),
    );

    const { ref, isDropTarget } = useDroppable({
        id: col.id,
        type: "column",
        accept: "task",
        data: {
            columnId: col.id,
            position: tasks.length,
        },
    });

    if (collapsed) {
        return (
            <button
                type="button"
                onClick={() => setCollapsed(false)}
                className="flex h-30 w-14 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card text-xs font-semibold transition-colors hover:bg-secondary cursor-pointer"
                aria-label={`باز کردن ستون ${col.title}`}>
                <ChevronDown className="size-4" />

                <span className="[writing-mode:vertical-rl]">{col.title}</span>
            </button>
        );
    }

    return (
        <section
            className={cn(
                "shrink-0 flex flex-col gap-3 w-76 bg-secondary/40 border border-border rounded-3xl p-3",
                isDropTarget && "border-primary bg-primary-soft/40",
            )}
            aria-label={col.title}>
            <header className="flex items-center justify-between gap-2 px-1">
                <div className="flex items-center gap-2">
                    <span
                        className="size-2.5 rounded-full"
                        style={{ backgroundColor: col.accent }}
                    />
                    <h3 className="truncate text-sm font-bold">{col.title}</h3>
                    <span className="px-2 py-0.5 text-xs text-muted-foreground">
                        {formatNumberFa(col.wip_limit)}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="rounded-full size-8">
                                <MoreHorizontal size={16} />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                            <DropdownMenuItem onSelect={onRename}>
                                تغییر نام
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onSelect={() => setCollapsed(true)}>
                                جمع کردن ستون
                            </DropdownMenuItem>
                            <DropdownMenuItem>افزایش سقف WIP</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onSelect={onDelete}
                                className="text-destructive">
                                حذف ستون
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full size-8"
                        onClick={() => setCollapsed(true)}
                        aria-label={`جمع کردن ستون ${col.title}`}>
                        <ChevronUp size={16} />
                    </Button>
                </div>
            </header>
            <div ref={ref} className="flex flex-col gap-3 min-h-20">
                {tasks.length === 0 && <TaskCardEmpty />}
                {tasks.map((task, i) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        index={i}
                        columnId={col.id}
                    />
                ))}

                <Button
                    size="lg"
                    variant="ghost"
                    className="text-sm justify-start rounded-full">
                    <Plus size={16} /> افزودن وظیفه
                </Button>
            </div>
        </section>
    );
};

BoardColumn.propTypes = {
    col: PropTypes.shape({
        title: PropTypes.string.isRequired,
        accent: PropTypes.string.isRequired,
        wip_limit: PropTypes.number.isRequired,
    }).isRequired,
    onRename: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default BoardColumn;
