import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useMemberStore } from "../store/useMemberStore";
import { toast } from "sonner";

const MemberAddDialog = () => {
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Reset the form whenever the dialog is closed
    useEffect(() => {
        if (!open) {
            reset();
        }
    }, [open, reset]);

    const createMember = useMemberStore((s) => s.createMember);
    const mutationLoading = useMemberStore((s) => s.mutationLoading);

    // Create the member and handle the result
    const handleAddMember = async (formData) => {
        const result = await createMember(formData);

        if (result.success) {
            toast.success("عضو با موفقیت اضافه شد");
            setOpen(false);
        } else {
            toast.error(result.error || "خطا در افزودن عضو");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="lg" className="rounded-full text-sm">
                    <UserPlus size={16} />
                    دعوت عضو
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>افزودن عضو جدید</DialogTitle>
                    <DialogDescription>
                        نام و نقش عضو را وارد کنید تا به تیم اضافه شود.
                    </DialogDescription>
                </DialogHeader>

                <form
                    onSubmit={handleSubmit(handleAddMember)}
                    className="mt-4 flex flex-col gap-4">
                    <Field>
                        <Label htmlFor="name">نام و نام خانوادگی</Label>
                        <Input
                            id="name"
                            placeholder="مثلاً سارا احمدی"
                            {...register("name", {
                                required: "نام و نام‌ خانوادگی الزامی است",
                            })}
                        />

                        {/* Display validation error */}
                        {errors.name && (
                            <p className="text-xs text-destructive">
                                {errors.name.message}
                            </p>
                        )}
                    </Field>

                    <Field>
                        <Label htmlFor="role">نقش</Label>
                        <Input
                            id="role"
                            placeholder="مثلاً توسعه‌دهنده فرانت‌اند"
                            {...register("role", {
                                required: "نقش الزامی است",
                            })}
                        />

                        {/* Display validation error */}
                        {errors.role && (
                            <p className="text-xs text-destructive">
                                {errors.role.message}
                            </p>
                        )}
                    </Field>

                    {/* Submit the form while preventing duplicate requests */}
                    <Button
                        type="submit"
                        disabled={mutationLoading}
                        className="mr-auto w-fit rounded-full">
                        {mutationLoading ? "در حال افزودن..." : "افزودن عضو"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default MemberAddDialog;
