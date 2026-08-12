import {
    CalendarDays,
    CheckSquare,
    Columns3,
    LayoutDashboard,
    Users,
} from "lucide-react";
import { NavLink } from "react-router";
import { cn } from "@/utils/utils";

const mobileNavItems = [
    { to: "/", label: "داشبورد", icon: LayoutDashboard },
    { to: "/board", label: "بردها", icon: Columns3 },
    { to: "/tasks", label: "وظایف من", icon: CheckSquare },
    { to: "/calender", label: "تقویم", icon: CalendarDays },
    { to: "/members", label: "اعضا", icon: Users },
];

const MobileNav = () => {
    return (
        <nav
            className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 backdrop-blur-xl lg:hidden"
            aria-label="ناوبری اصلی">
            <div className="grid h-16 grid-cols-5 px-2 pb-[env(safe-area-inset-bottom)]">
                {mobileNavItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === "/"}
                            className={({ isActive }) =>
                                cn(
                                    // Base navigation item styles
                                    "flex flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-medium transition-colors",

                                    // Active and inactive states
                                    isActive
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-foreground",
                                )
                            }>
                            <Icon className="size-5" />
                            <span>{item.label}</span>
                        </NavLink>
                    );
                })}
            </div>
        </nav>
    );
};

export default MobileNav;
