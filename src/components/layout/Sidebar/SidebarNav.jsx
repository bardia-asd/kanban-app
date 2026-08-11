import { NavLink } from "react-router";
import { sidebarItems } from "@/data/sidebarData";
import { useSidebarStore } from "@/store/useSidebarStore";
import { cn } from "@/utils/utils";

const SidebarNav = () => {
    const collapsed = useSidebarStore((s) => s.collapsed);

    return (
        <nav className="px-4 py-3" aria-label="ناوبری اصلی">
            <ul className="flex flex-col gap-1">
                {sidebarItems.map((item) => (
                    <li className="w-full" key={item.label}>
                        <NavLink
                            to={item.to}
                            title={item.label}
                            className={({ isActive }) =>
                                cn(
                                    // Base navigation item styles
                                    "flex items-center gap-3 h-11 rounded-full px-3 text-sm font-medium transition-colors duration-200",

                                    // Center the icon when the sidebar is collapsed
                                    collapsed && "justify-center px-0",

                                    // Active and inactive navigation states
                                    isActive
                                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                        : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                                )
                            }>
                            <item.icon className="size-5 shrink-0" />

                            {/* Hide the label when the sidebar is collapsed */}
                            {!collapsed && (
                                <span className="truncate">{item.label}</span>
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SidebarNav;
