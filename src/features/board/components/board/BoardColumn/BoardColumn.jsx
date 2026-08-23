import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown, ChevronUp, MoreHorizontal, Plus } from "lucide-react";
import { useDroppable } from "@dnd-kit/react";
import { useShallow } from "zustand/react/shallow";
import { toast } from "sonner";

import { useTasksStore } from "@/features/board/store/useTasksStore";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import TaskCard from "@/features/board/components/tasks/TaskCard";
import TaskCardEmpty from "@/features/board/components/tasks/states/TaskCardEmpty";

import { formatNumberFa } from "@/utils/formatter";
import { cn } from "@/utils/utils";

const BoardColumn = ({
    col,
    onRename,
    onDelete,
    isAdding,
    onStartAdding,
    onStopAdding,
}) => {
    const [collapsed, setCollapsed] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState("");

    // Get and sort tasks belonging to this column
    const tasks = useTasksStore(
        useShallow((s) =>
            s.tasks
                .filter((task) => task.column_id === col.id)
                .sort((a, b) => a.position - b.position),
        ),
    );

    const createTask = useTasksStore((s) => s.createTask);

    // Configure the column as a drop target for tasks
    const { ref, isDropTarget } = useDroppable({
        id: col.id,
        type: "column",
        accept: "task",
        data: {
            columnId: col.id,
            position: tasks.length,
        },
    });

    // Create a task in this column
    const handleAddTask = async (e) => {
        e.preventDefault();

        const title = newTaskTitle.trim();

        if (!title) {
            onStopAdding();
            setNewTaskTitle("");
            return;
        }

        onStopAdding();
        setNewTaskTitle("");

        const result = await createTask({
            title,
            column_id: col.id,
        });

        if (result.success) {
            toast.success("وظیفه با موفقیت اضافه شد");
        } else {
            toast.error(result.error || "خطا در افزودن وظیفه");
        }
    };

    // Cancel task creation and reset the input
    const handleCancel = () => {
        onStopAdding();
        setNewTaskTitle("");
    };

    // Render the collapsed column view
    if (collapsed) {
        return (
            <button
                type="button"
                onClick={() => setCollapsed(false)}
                className="flex h-30 w-14 shrink-0 cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card text-xs font-semibold transition-colors hover:bg-secondary"
                aria-label={`باز کردن ستون ${col.title}`}>
                <ChevronDown className="size-4" />
                <span className="[writing-mode:vertical-rl]">{col.title}</span>
            </button>
        );
    }

    return (
        <section
            className={cn(
                "flex w-76 shrink-0 flex-col gap-3 rounded-3xl border border-border bg-secondary/40",
                isDropTarget && "border-primary bg-primary-soft/40",
            )}
            aria-label={col.title}>
            <header className="flex items-center justify-between gap-2 p-3">
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
                    {/* Column actions */}
                    <DropdownMenu dir="rtl">
                        <DropdownMenuTrigger asChild>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="size-8 rounded-full">
                                <MoreHorizontal size={16} />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="center">
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

                    {/* Collapse column */}
                    <Button
                        size="icon"
                        variant="ghost"
                        className="size-8 rounded-full"
                        onClick={() => setCollapsed(true)}
                        aria-label={`جمع کردن ستون ${col.title}`}>
                        <ChevronUp size={16} />
                    </Button>
                </div>
            </header>

            {/* Task drop zone */}
            <div
                ref={ref}
                className="flex max-h-[calc(100vh-14rem)] min-h-20 flex-col gap-3 overflow-y-auto p-3">
                {tasks.length === 0 && <TaskCardEmpty />}

                {tasks.map((task, index) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        index={index}
                        columnId={col.id}
                    />
                ))}

                {/* Add task form */}
                {isAdding ? (
                    <form className="space-y-2" onSubmit={handleAddTask}>
                        <Input
                            placeholder="عنوان وظیفه..."
                            className="h-11 rounded-full bg-card"
                            value={newTaskTitle}
                            onChange={(e) => setNewTaskTitle(e.target.value)}
                        />

                        <div className="flex gap-2">
                            <Button className="flex-1 rounded-full">
                                افزودن
                            </Button>

                            <Button
                                type="button"
                                variant="ghost"
                                className="rounded-full"
                                onClick={handleCancel}>
                                انصراف
                            </Button>
                        </div>
                    </form>
                ) : (
                    <Button
                        size="lg"
                        variant="ghost"
                        className="shrink-0 justify-start rounded-full text-sm"
                        onClick={onStartAdding}>
                        <Plus size={16} />
                        افزودن وظیفه
                    </Button>
                )}
            </div>
        </section>
    );
};

BoardColumn.propTypes = {
    /** Column data displayed by the component. */
    col: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        title: PropTypes.string.isRequired,
        accent: PropTypes.string.isRequired,
        wip_limit: PropTypes.number.isRequired,
    }).isRequired,

    /** Opens the rename dialog for the column. */
    onRename: PropTypes.func.isRequired,

    /** Opens the delete confirmation dialog for the column. */
    onDelete: PropTypes.func.isRequired,

    /** Controls whether the add-task form is visible. */
    isAdding: PropTypes.bool.isRequired,

    /** Starts the add-task flow. */
    onStartAdding: PropTypes.func.isRequired,

    /** Stops the add-task flow. */
    onStopAdding: PropTypes.func.isRequired,
};

export default BoardColumn;
