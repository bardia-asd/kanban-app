import { Button } from "@/components/ui/button";
import { PanelRightClose, PanelRightOpen } from "lucide-react";

import { useSidebarStore } from "@/store/useSidebarStore";

const SidebarToggle = () => {
    const collapsed = useSidebarStore((s) => s.collapsed);
    const toggleCollapsed = useSidebarStore((s) => s.toggleCollapsed);

    return (
        <Button
            size="icon"
            variant="ghost"
            className="hidden size-11 rounded-full lg:inline-flex"
            onClick={toggleCollapsed}
            aria-label={
                collapsed ? "باز کردن نوار کناری" : "جمع کردن نوار کناری"
            }>
            {/* Show the appropriate icon based on the sidebar state */}
            {collapsed ? (
                <PanelRightOpen className="size-5" />
            ) : (
                <PanelRightClose className="size-5" />
            )}
        </Button>
    );
};

export default SidebarToggle;
