import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

import { useTasksStore } from "@/features/board/store/useTasksStore";
import { useBoardUIStore } from "@/features/board/store/useBoardUIStore";

const DeleteTaskAlertDialog = () => {
    const deletingTaskId = useBoardUIStore((s) => s.deletingTaskId);
    const closeDeleteTask = useBoardUIStore((s) => s.closeDeleteTask);
    const removeTask = useTasksStore((s) => s.removeTask);
    const deleteLoading = useTasksStore((s) => s.mutationLoading);

    const task = useTasksStore((s) =>
        s.tasks.find((t) => t.id === deletingTaskId),
    );

    // Delete the pending task and close the dialog
    const handleDeleteTask = async () => {
        const result = await removeTask(deletingTaskId);

        if (result.success) {
            toast.success("وظیفه حذف شد");
        } else {
            toast.error(result.error || "خطا در حذف وظیفه");
        }

        closeDeleteTask();
    };

    if (!task) return;

    return (
        <AlertDialog
            open={!!deletingTaskId}
            onOpenChange={(open) => !open && closeDeleteTask()}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>حذف وظیفه</AlertDialogTitle>

                    <AlertDialogDescription>
                        آیا از حذف «{task.title}» مطمئن هستید؟ این عملیات قابل
                        بازگشت نیست.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter className="pt-3">
                    <AlertDialogAction
                        onClick={handleDeleteTask}
                        disabled={deleteLoading}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        {deleteLoading ? "در حال حذف..." : "حذف"}
                    </AlertDialogAction>

                    <AlertDialogCancel>انصراف</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteTaskAlertDialog;
