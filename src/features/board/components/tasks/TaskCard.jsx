import PropTypes from "prop-types";
import {
    CalendarDays,
    CheckSquare,
    GripVertical,
    MessageSquare,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    PRIORITY_META,
    LABEL_COLOR_META,
} from "@/features/board/constant/boardConstants";
import { formatNumberFa, formatDateShort } from "@/utils/formatter";
import { getInitials, cn } from "@/utils/utils";

const TaskCard = ({ task }) => {
    // Calculate the number of completed checklist items
    const done = task.checklist_items.filter((item) => item.done).length;
    const priority = PRIORITY_META[task.priority];

    // Check whether the task due date has passed
    const isOverdue = (date) => {
        if (!date) return false;

        return new Date(date) < new Date();
    };

    return (
        <article aria-label={task.title}>
            <Card className="group cursor-grab transition-all duration-200 hover:-translate-y-0.5">
                <CardHeader className="items-start justify-start gap-2">
                    {/* Drag handle */}
                    <GripVertical className="mt-0.5 size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="min-w-0 flex-1">
                        <CardTitle className="line-clamp-2 text-sm leading-6">
                            {task.title}
                        </CardTitle>

                        {task.description && (
                            <CardDescription className="mt-1 line-clamp-2 text-xs leading-5">
                                {task.description}
                            </CardDescription>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="space-y-3">
                    {/* Task priority and labels */}
                    <div className="flex flex-wrap items-center gap-1.5">
                        <Badge
                            style={{
                                color: priority.color,
                                backgroundColor: `color-mix(in oklab, ${priority.color} 14%, transparent)`,
                            }}>
                            {priority.label}
                        </Badge>

                        {task.task_labels.length > 0 &&
                            task.task_labels.map(({ label }) => {
                                const color =
                                    LABEL_COLOR_META[label.color].color;

                                return (
                                    <Badge
                                        key={label.id}
                                        style={{
                                            backgroundColor: `color-mix(in oklab, ${color} 12%, transparent)`,
                                            color,
                                        }}>
                                        {label.name}
                                    </Badge>
                                );
                            })}
                    </div>

                    {/* Checklist progress */}
                    {task.checklist_items.length > 0 && (
                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <CheckSquare className="size-3.5" />
                                    چک‌لیست
                                </span>

                                <div>
                                    {formatNumberFa(done)} /
                                    {formatNumberFa(
                                        task.checklist_items.length,
                                    )}
                                </div>
                            </div>

                            <Progress
                                value={
                                    (done / task.checklist_items.length) * 100
                                }
                            />
                        </div>
                    )}
                </CardContent>

                <CardFooter className="justify-between border-t border-border pt-3">
                    {/* Due date and comment count */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        {task.due_date && (
                            <span
                                className={cn(
                                    "flex items-center gap-1",
                                    isOverdue(task.due_date) &&
                                        "font-semibold text-destructive",
                                )}>
                                <CalendarDays size={14} />
                                {formatDateShort(task.due_date)}
                            </span>
                        )}

                        {task.comments.length > 0 && (
                            <span className="flex items-center gap-1">
                                <MessageSquare className="size-3.5" />
                                {formatNumberFa(task.comments.length)}
                            </span>
                        )}
                    </div>

                    {/* Assigned members */}
                    <div className="flex gap-2">
                        {task.task_assignees.map(({ member }) => (
                            <Avatar key={member.id} className="size-7">
                                <AvatarImage src={member.avatar} />
                                <AvatarFallback className="text-xs">
                                    {getInitials(member.name)}
                                </AvatarFallback>
                            </Avatar>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </article>
    );
};

TaskCard.propTypes = {
    /** Task data displayed by the card. */
    task: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        priority: PropTypes.string.isRequired,
        due_date: PropTypes.string,
        checklist_items: PropTypes.arrayOf(
            PropTypes.shape({
                done: PropTypes.bool.isRequired,
            }),
        ).isRequired,
        comments: PropTypes.array.isRequired,
        task_labels: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.shape({
                    id: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number,
                    ]).isRequired,
                    name: PropTypes.string.isRequired,
                    color: PropTypes.string.isRequired,
                }).isRequired,
            }),
        ).isRequired,
        task_assignees: PropTypes.arrayOf(
            PropTypes.shape({
                member: PropTypes.shape({
                    id: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number,
                    ]).isRequired,
                    name: PropTypes.string.isRequired,
                    avatar: PropTypes.string,
                }).isRequired,
            }),
        ).isRequired,
    }).isRequired,
};

export default TaskCard;
