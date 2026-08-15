import { Bell } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const notifications = [
    {
        id: "email",
        label: "اعلان‌های ایمیلی",
        hint: "خلاصه فعالیت‌ها به ایمیل شما ارسال می‌شود",
        checked: true,
    },
    {
        id: "due",
        label: "یادآوری مهلت وظایف",
        hint: "یک روز پیش از سررسید هشدار بگیرید",
        checked: true,
    },
    {
        id: "mention",
        label: "اشاره‌ها و کامنت‌ها",
        hint: "وقتی کسی شما را منشن می‌کند",
        checked: false,
    },
    {
        id: "motion",
        label: "کاهش انیمیشن‌ها",
        hint: "حرکت‌های رابط کاربری ساده‌تر می‌شود",
        checked: false,
    },
];

const Announcements = () => {
    return (
        <Card>
            <CardHeader className="border-b border-border p-5 sm:p-6">
                <div className="flex items-center gap-3">
                    {/* Notifications section icon */}
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                        <Bell size={20} />
                    </span>

                    <div>
                        <CardTitle>اعلان‌ها</CardTitle>
                        <CardDescription>
                            انتخاب کنید چه زمانی به شما اطلاع داده شود
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-5 sm:p-6">
                <ul className="flex flex-col divide-y divide-border">
                    {/* Render each notification preference */}
                    {notifications.map((notification) => (
                        <li
                            key={notification.id}
                            className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
                            <div>
                                <p className="text-sm font-medium">
                                    {notification.label}
                                </p>
                                <p className="mt-0.5 text-xs text-muted-foreground">
                                    {notification.hint}
                                </p>
                            </div>

                            {/* Set the initial switch state */}
                            <Switch defaultChecked={notification.checked} />
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default Announcements;
