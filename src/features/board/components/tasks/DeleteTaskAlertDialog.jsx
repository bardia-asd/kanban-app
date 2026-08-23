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
    const pendingDeleteTaskId = useBoardUIStore((s) => s.pendingDeleteTaskId);
    const clearPendingDelete = useBoardUIStore((s) => s.clearPendingDelete);
    const removeTask = useTasksStore((s) => s.removeTask);
    const deleteLoading = useTasksStore((s) => s.mutationLoading);

    const pendingTask = useTasksStore((s) =>
        s.tasks.find((task) => task.id === pendingDeleteTaskId),
    );

    // Delete the pending task and close the dialog
    const handleDeleteTask = async () => {
        const result = await removeTask(pendingDeleteTaskId);

        if (result.success) {
            toast.success("وظیفه حذف شد");
        } else {
            toast.error(result.error || "خطا در حذف وظیفه");
        }

        clearPendingDelete();
    };

    return (
        <AlertDialog
            open={!!pendingDeleteTaskId}
            onOpenChange={(open) => !open && clearPendingDelete()}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>حذف وظیفه</AlertDialogTitle>

                    <AlertDialogDescription>
                        آیا از حذف «{pendingTask?.title}» مطمئن هستید؟ این
                        عملیات قابل بازگشت نیست.
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
