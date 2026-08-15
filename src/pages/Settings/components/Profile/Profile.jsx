import { useState } from "react";
import { User } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Profile = () => {
    const [name, setName] = useState("سارا احمدی");
    const [email, setEmail] = useState("sara@team.ir");
    const [role, setRole] = useState("مدیر محصول");

    // Handle profile form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success("تغییرات ذخیره شد");
    };

    return (
        <Card>
            <CardHeader className="border-b border-border p-5 sm:p-6">
                <div className="flex items-center gap-3">
                    {/* Profile section icon */}
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                        <User size={20} />
                    </span>

                    <div>
                        <CardTitle>پروفایل</CardTitle>
                        <CardDescription>
                            اطلاعات نمایشی شما در فضای کاری تیم
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-5 sm:p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    {/* User avatar */}
                    <Avatar className="size-16">
                        <AvatarFallback>سا</AvatarFallback>
                    </Avatar>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-1 flex-col gap-5">
                        <div className="grid gap-4 sm:grid-cols-2">
                            {/* User name */}
                            <Field>
                                <Label htmlFor="name">نام و نام خانوادگی</Label>
                                <Input
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Field>

                            {/* User email */}
                            <Field>
                                <Label htmlFor="email">ایمیل</Label>
                                <Input
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Field>

                            {/* User role */}
                            <Field className="sm:col-span-2">
                                <Label htmlFor="role">نقش</Label>
                                <Input
                                    id="role"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                />
                            </Field>
                        </div>

                        {/* Save profile changes */}
                        <div className="mr-auto">
                            <Button size="lg" className="rounded-full">
                                ذخیره تغییرات
                            </Button>
                        </div>
                    </form>
                </div>
            </CardContent>
        </Card>
    );
};

export default Profile;
