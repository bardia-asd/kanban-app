import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { useBoardStore } from "@/features/board/store/useBoardStore";
import { toast } from "sonner";

const RenameColumnDialog = ({ column, open, onOpenChange }) => {
    const [name, setName] = useState("");

    const renameColumn = useBoardStore((s) => s.renameColumn);
    const mutationLoading = useBoardStore((s) => s.mutationLoading);

    // Sync the input with the selected column
    useEffect(() => {
        if (column) {
            setName(column.title);
        }
    }, [column]);

    // Rename the column and handle the result
    const handleRenameColumn = async (e) => {
        e.preventDefault();

        if (!column) return;

        const trimmedName = name.trim();

        if (!trimmedName || trimmedName === column.title) return;

        const result = await renameColumn(column.id, trimmedName);

        if (result.success) {
            toast.success("نام ستون با موفقیت تغییر کرد");
            onOpenChange(false);
        } else {
            toast.error(result.error || "خطا در تغییر نام ستون");
        }
    };

    // Don't render the dialog when no column is selected
    if (!column) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <form
                    onSubmit={handleRenameColumn}
                    className="flex flex-col gap-3">
                    <DialogHeader>
                        <DialogTitle>تغییر نام ستون</DialogTitle>
                        <DialogDescription>
                            نام جدیدی برای ستون «{column.title}» وارد کنید.
                        </DialogDescription>
                    </DialogHeader>

                    <Field>
                        <Label htmlFor="column-name">نام ستون</Label>

                        <Input
                            id="column-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="مثلاً در حال انجام"
                            disabled={mutationLoading}
                        />
                    </Field>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            disabled={mutationLoading}>
                            انصراف
                        </Button>

                        <Button
                            type="submit"
                            disabled={
                                mutationLoading ||
                                !name.trim() ||
                                name.trim() === column.title
                            }>
                            {mutationLoading ? "در حال ذخیره..." : "ذخیره"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

RenameColumnDialog.propTypes = {
    /** Controls whether the dialog is open. */
    open: PropTypes.bool.isRequired,

    /** Updates the dialog open state. */
    onOpenChange: PropTypes.func.isRequired,

    /** Column selected for renaming. */
    column: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),
};

export default RenameColumnDialog;
