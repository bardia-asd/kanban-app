import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const latestActivities = [
    {
        id: 1,
        title: "سارا احمدی یک وظیفه جدید ایجاد کرد",
        time: "۱۰ دقیقه پیش",
    },
    {
        id: 2,
        title: "علی رضایی وظیفه «طراحی صفحه داشبورد» را تکمیل کرد",
        time: "۲۵ دقیقه پیش",
    },
    {
        id: 3,
        title: "محمد کریمی به پروژه «اپلیکیشن موبایل» اضافه شد",
        time: "۱ ساعت پیش",
    },
    {
        id: 4,
        title: "نگار حسینی وضعیت «پیاده‌سازی احراز هویت» را تغییر داد",
        time: "۲ ساعت پیش",
    },
];

const LatestActivities = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>فعالیت اخیر</CardTitle>
            </CardHeader>
            <CardContent>
                <ol className="flex flex-col gap-4 border-s border-border ps-4">
                    {latestActivities.map((activity) => (
                        <li className="relative" key={activity.id}>
                            <span className="absolute -inset-s-5.25 top-0 size-2.5 rounded-full bg-primary" />
                            <p className="text-sm leading-6 truncate">
                                {activity.title}
                            </p>
                            <span className="text-xs text-muted-foreground">
                                {activity.time}
                            </span>
                        </li>
                    ))}
                </ol>
            </CardContent>
        </Card>
    );
};

export default LatestActivities;
