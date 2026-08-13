import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPriority } from "./upcomingDeadlines.utils";
import { formatDateShort } from "@/utils/formatter";
import { getInitials } from "@/utils/utils";

const upcomingDeadlines = [
    {
        id: 1,
        title: "طراحی صفحه داشبورد",
        date: "2026-08-15",
        priority: "high",
        members: [
            {
                id: 1,
                name: "سارا احمدی",
                avatar: "https://i.pravatar.cc/150?img=47",
            },
            {
                id: 2,
                name: "علی رضایی",
                avatar: null,
            },
        ],
    },
    {
        id: 2,
        title: "پیاده‌سازی احراز هویت",
        date: "2026-08-17",
        priority: "high",
        members: [
            {
                id: 3,
                name: "محمد کریمی",
                avatar: "https://i.pravatar.cc/150?img=12",
            },
            {
                id: 4,
                name: "نگار حسینی",
                avatar: null,
            },
            {
                id: 1,
                name: "سارا احمدی",
                avatar: "https://i.pravatar.cc/150?img=47",
            },
        ],
    },
    {
        id: 3,
        title: "بازطراحی صفحه پروفایل",
        date: "2026-08-20",
        priority: "medium",
        members: [
            {
                id: 5,
                name: "رضا مرادی",
                avatar: "https://i.pravatar.cc/150?img=68",
            },
        ],
    },
    {
        id: 4,
        title: "تست و رفع باگ‌های نسخه جدید",
        date: "2026-08-22",
        priority: "medium",
        members: [
            {
                id: 2,
                name: "علی رضایی",
                avatar: null,
            },
            {
                id: 4,
                name: "نگار حسینی",
                avatar: "https://i.pravatar.cc/150?img=32",
            },
        ],
    },
    {
        id: 5,
        title: "مستندسازی API",
        date: "2026-08-25",
        priority: "low",
        members: [
            {
                id: 3,
                name: "محمد کریمی",
                avatar: "https://i.pravatar.cc/150?img=12",
            },
            {
                id: 5,
                name: "رضا مرادی",
                avatar: null,
            },
        ],
    },
];

const UpcomingDeadlines = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>مهلت‌های نزدیک</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="flex flex-col gap-3">
                    {upcomingDeadlines.map((i) => (
                        <li key={i.id} className="flex items-start gap-3">
                            <span
                                className="size-2.5 rounded-full shrink-0 mt-1.5"
                                style={{
                                    backgroundColor: getPriority(i.priority),
                                }}
                            />
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium">
                                    {i.title}
                                </p>
                                <p className="text-xs font-semibold text-destructive">
                                    {formatDateShort(i.date)}
                                </p>
                            </div>

                            <div className="flex gap-2">
                                {i.members.map((m) => (
                                    <Avatar key={m.id} className="size-6">
                                        <AvatarImage src={m.avatar} />
                                        <AvatarFallback className="text-xs">
                                            {getInitials(m.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default UpcomingDeadlines;
