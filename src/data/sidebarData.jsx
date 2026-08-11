import {
    Archive,
    BarChart3,
    CalendarDays,
    CheckSquare,
    Columns3,
    FolderKanban,
    LayoutDashboard,
    Settings,
    Users,
} from "lucide-react";

export const sidebarItems = [
    { to: "/", label: "داشبورد", icon: LayoutDashboard },
    { to: "/projects", label: "پروژه‌ها", icon: FolderKanban },
    { to: "/board", label: "بردها", icon: Columns3 },
    { to: "/tasks", label: "وظایف من", icon: CheckSquare },
    { to: "/calender", label: "تقویم", icon: CalendarDays },
    { to: "/members", label: "اعضا", icon: Users },
    { to: "/reports", label: "گزارش‌ها", icon: BarChart3 },
    { to: "/archive", label: "آرشیو", icon: Archive },
    { to: "/settings", label: "تنظیمات", icon: Settings },
];
