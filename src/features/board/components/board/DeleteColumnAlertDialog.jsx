import PropTypes from "prop-types";
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
import { useBoardStore } from "@/features/board/store/useBoardStore";
import { toast } from "sonner";

const DeleteColumnAlertDialog = ({ column, open, onOpenChange }) => {
    const deleteColumn = useBoardStore((s) => s.deleteColumn);
    const mutationLoading = useBoardStore((s) => s.mutationLoading);

    // Delete the selected column and handle the result
    const handleDelete = async () => {
        if (!column) return;

        const result = await deleteColumn(column.id);

        if (result.success) {
            toast.success("ستون با موفقیت حذف شد");
        } else {
            toast.error(result.error || "خطا در حذف ستون");
        }

        onOpenChange(false);
    };

    // Don't render the dialog when no column is selected
    if (!column) return null;

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        حذف ستون «{column.title}»؟
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        آیا مطمئن هستید که می‌خواهید این ستون را حذف کنید؟ این
                        عملیات قابل بازگشت نیست.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>انصراف</AlertDialogCancel>

                    {/* Confirm column deletion */}
                    <AlertDialogAction
                        onClick={handleDelete}
                        disabled={mutationLoading}>
                        {mutationLoading ? "در حال حذف..." : "حذف ستون"}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

DeleteColumnAlertDialog.propTypes = {
    /** Column selected for deletion. */
    column: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        title: PropTypes.string.isRequired,
    }),

    /** Controls whether the alert dialog is open. */
    open: PropTypes.bool.isRequired,

    /** Updates the dialog open state. */
    onOpenChange: PropTypes.func.isRequired,
};

export default DeleteColumnAlertDialog;
