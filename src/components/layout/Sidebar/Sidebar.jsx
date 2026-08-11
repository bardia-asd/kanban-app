import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import { useSidebarStore } from "@/store/useSidebarStore";
import { cn } from "@/utils/utils";

const Sidebar = () => {
    const collapsed = useSidebarStore((s) => s.collapsed);

    return (
        <aside
            className={cn(
                // Keep the sidebar visible on desktop and fixed to the viewport height
                "sticky top-0 right-0 h-screen border-l border-sidebar-border bg-sidebar text-sidebar-foreground shadow hidden lg:block transition-[width] duration-300",

                // Adjust the sidebar width based on its collapsed state
                collapsed ? "w-20" : "w-72",
            )}>
            <div className="flex h-full flex-col overflow-y-auto">
                <SidebarHeader />
                <SidebarNav />
            </div>
        </aside>
    );
};

export default Sidebar;
