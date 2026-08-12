import { useEffect } from "react";
import { useLocation } from "react-router";
import { useSidebarStore } from "@/store/useSidebarStore";
import { Drawer, DrawerContent, DrawerHeader } from "@/components/ui/drawer";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

const MobileSidebar = () => {
    const mobileOpen = useSidebarStore((s) => s.mobileOpen);
    const setMobileOpen = useSidebarStore((s) => s.setMobileOpen);

    const location = useLocation();

    // Close the mobile sidebar when the route changes
    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    return (
        <Drawer
            direction="right"
            handleOnly
            open={mobileOpen}
            onOpenChange={setMobileOpen}>
            <DrawerContent className="right-0 left-auto w-64 lg:hidden">
                <DrawerHeader className="p-0">
                    <SidebarHeader forceExpanded />
                </DrawerHeader>

                <SidebarNav forceExpanded />
            </DrawerContent>
        </Drawer>
    );
};

export { MobileSidebar };
