import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { X } from "lucide-react";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

import { useBoardUIStore } from "@/features/board/store/useBoardUIStore";
import { useTasksStore } from "@/features/board/store/useTasksStore";
import { useLabelsStore } from "@/features/board/store/useLabelsStore";
import { useMemberStore } from "@/features/members/store/useMemberStore";

import {
    PRIORITY_META,
    LABEL_COLOR_META,
} from "@/features/board/constant/boardConstants";

import { getInitials } from "@/utils/utils";

const UpdateTaskDrawer = () => {
    const editingTaskId = useBoardUIStore((s) => s.editingTaskId);
    const closeEditTask = useBoardUIStore((s) => s.closeEditTask);

    const editLoading = useTasksStore((s) => s.mutationLoading);
    const editTask = useTasksStore((s) => s.editTask);

    const task = useTasksStore((s) =>
        s.tasks.find((t) => t.id === editingTaskId),
    );

    const fetchLabels = useLabelsStore((s) => s.fetchLabels);
    const labels = useLabelsStore((s) => s.labels);

    const fetchMembers = useMemberStore((s) => s.fetchMembers);
    const members = useMemberStore((s) => s.members);

    // Initialize the form with the current task values.
    const {
        register,
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: task?.title ?? "",
            description: task?.description ?? "",
            start_date: task?.start_date ?? null,
            due_date: task?.due_date ?? null,
            priority: task?.priority ?? "medium",
            task_labels: task?.task_labels?.map(({ label }) => label.id) ?? [],
            task_assignees:
                task?.task_assignees?.map(({ member }) => member.id) ?? [],
        },
    });

    // Reset the form whenever the selected task changes.
    useEffect(() => {
        if (!task) return;

        reset({
            title: task.title ?? "",
            description: task.description ?? "",
            start_date: task.start_date ?? null,
            due_date: task.due_date ?? null,
            priority: task.priority ?? "medium",
            task_labels: task.task_labels?.map(({ label }) => label.id) ?? [],
            task_assignees:
                task.task_assignees?.map(({ member }) => member.id) ?? [],
        });
    }, [task, reset]);

    // Load labels and members used by the edit form.
    useEffect(() => {
        fetchLabels();
        fetchMembers();
    }, [fetchLabels, fetchMembers]);

    // Submit the updated task data.
    const handleEditTask = async (values) => {
        const result = await editTask(editingTaskId, values);

        if (result.success) {
            toast.success("وظیفه با موفقیت ویرایش شد");
        } else {
            toast.error(result.error || "خطا در ویرایش وظیفه");
        }

        closeEditTask();
    };

    if (!task) return;

    return (
        <Drawer
            direction="left"
            handleOnly
            open={!!editingTaskId}
            onOpenChange={(open) => !open && closeEditTask()}>
            <DrawerContent className="w-full sm:w-lg">
                {/* Drawer header with the current task title and close button. */}
                <DrawerHeader className="sticky top-0 z-10 flex-row items-center justify-between border-b border-border bg-background/95 backdrop-blur-md">
                    <DrawerTitle className="flex-1 truncate text-right text-base">
                        {task.title}
                    </DrawerTitle>

                    <DrawerClose asChild>
                        <Button size="icon" variant="ghost">
                            <X size={16} />
                        </Button>
                    </DrawerClose>
                </DrawerHeader>

                <div className="h-full overflow-y-auto p-5">
                    <form
                        onSubmit={handleSubmit(handleEditTask)}
                        className="flex h-full flex-col gap-5">
                        {/* Task title. */}
                        <Field>
                            <Label htmlFor="title">عنوان</Label>
                            <Input
                                id="title"
                                {...register("title", {
                                    required: "عنوان تسک الزامی است",
                                })}
                                aria-label="عنوان وظیفه"
                                aria-invalid={!!errors.title}
                                className="h-11 rounded-full"
                            />

                            {errors.title && (
                                <p className="text-xs text-destructive">
                                    {errors.title.message}
                                </p>
                            )}
                        </Field>

                        {/* Task priority. */}
                        <Field>
                            <Label htmlFor="priority">اولویت</Label>

                            <Controller
                                name="priority"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        dir="rtl"
                                        value={field.value}
                                        onValueChange={field.onChange}>
                                        <SelectTrigger className="h-11 rounded-full">
                                            <SelectValue placeholder="انتخاب اولویت" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            {Object.entries(PRIORITY_META).map(
                                                ([k, { label }]) => (
                                                    <SelectItem
                                                        key={k}
                                                        value={k}>
                                                        {label}
                                                    </SelectItem>
                                                ),
                                            )}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </Field>

                        {/* Task start and due dates. */}
                        <div className="grid grid-cols-2 gap-3">
                            <Field>
                                <Label htmlFor="start_date">تاریخ شروع</Label>
                                <Input
                                    type="date"
                                    id="start_date"
                                    {...register("start_date")}
                                    className="h-11 rounded-full"
                                />
                            </Field>

                            <Field>
                                <Label htmlFor="due_date">مهلت انجام</Label>
                                <Input
                                    type="date"
                                    id="due_date"
                                    {...register("due_date")}
                                    className="h-11 rounded-full"
                                />
                            </Field>
                        </div>

                        {/* Task description. */}
                        <Field>
                            <Label htmlFor="description">توضیحات</Label>
                            <Textarea
                                id="description"
                                rows={4}
                                {...register("description")}
                                className="rounded-lg"
                            />
                        </Field>

                        {/* Select and toggle task labels. */}
                        <Field>
                            <Label htmlFor="labels">برچسب‌ها</Label>

                            <Controller
                                name="task_labels"
                                control={control}
                                render={({ field }) => (
                                    <div className="flex flex-wrap gap-2">
                                        {labels.map((label) => {
                                            const color =
                                                LABEL_COLOR_META[label.color];

                                            const pressed =
                                                field.value.includes(label.id);

                                            return (
                                                <Toggle
                                                    key={label.id}
                                                    size="lg"
                                                    type="button"
                                                    pressed={pressed}
                                                    onPressedChange={(
                                                        isPressed,
                                                    ) => {
                                                        field.onChange(
                                                            isPressed
                                                                ? [
                                                                      ...field.value,
                                                                      label.id,
                                                                  ]
                                                                : field.value.filter(
                                                                      (id) =>
                                                                          id !==
                                                                          label.id,
                                                                  ),
                                                        );
                                                    }}
                                                    style={
                                                        pressed
                                                            ? {
                                                                  color: color.color,
                                                                  backgroundColor: `color-mix(in oklab, ${color.color} 12%, transparent)`,
                                                              }
                                                            : undefined
                                                    }
                                                    className="rounded-xl">
                                                    {label.name}
                                                </Toggle>
                                            );
                                        })}
                                    </div>
                                )}
                            />
                        </Field>

                        {/* Select and toggle task assignees. */}
                        <Field>
                            <Label htmlFor="assignees">مسئولین</Label>

                            <Controller
                                name="task_assignees"
                                control={control}
                                render={({ field }) => (
                                    <div className="flex flex-wrap gap-2">
                                        {members.map((member) => {
                                            const pressed =
                                                field.value.includes(member.id);

                                            return (
                                                <Toggle
                                                    key={member.id}
                                                    variant="outline"
                                                    type="button"
                                                    size="lg"
                                                    pressed={pressed}
                                                    onPressedChange={(
                                                        isPressed,
                                                    ) => {
                                                        field.onChange(
                                                            isPressed
                                                                ? [
                                                                      ...field.value,
                                                                      member.id,
                                                                  ]
                                                                : field.value.filter(
                                                                      (id) =>
                                                                          id !==
                                                                          member.id,
                                                                  ),
                                                        );
                                                    }}
                                                    className="rounded-xl">
                                                    <Avatar className="size-6">
                                                        <AvatarImage
                                                            src={member.avatar}
                                                            alt={member.name}
                                                        />
                                                        <AvatarFallback className="bg-surface text-[10px]">
                                                            {getInitials(
                                                                member.name,
                                                            )}
                                                        </AvatarFallback>
                                                    </Avatar>

                                                    {member.name}
                                                </Toggle>
                                            );
                                        })}
                                    </div>
                                )}
                            />
                        </Field>

                        {/* Submit the updated task. */}
                        <Button
                            type="submit"
                            size="lg"
                            className="mt-auto shrink-0 rounded-full"
                            disabled={editLoading}>
                            {editLoading ? "در حال ذخیره..." : "ذخیره تغییرات"}
                        </Button>
                    </form>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default UpdateTaskDrawer;
