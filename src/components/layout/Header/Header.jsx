import SidebarToggle from "./SidebarToggle";
import WorkspaceSwitcher from "./WorkspaceSwitcher";
import GlobalSearch from "./GlobalSearch";
import QuickCreate from "./QuickCreate";
import UserMenu from "./UserMenu";
import ThemeSwitcher from "./ThemeSwitcher";

import { Button } from "@/components/ui/button";
import { PanelRightOpen } from "lucide-react";
import { useSidebarStore } from "@/store/useSidebarStore";

const Header = () => {
    const setMobileOpen = useSidebarStore((s) => s.setMobileOpen);

    return (
        <header className="sticky top-0 z-40 flex items-center gap-2 h-18 border-b border-border bg-background/85 backdrop-blur-xl px-4 md:px-6">
            <SidebarToggle />

            <Button
                size="icon"
                variant="ghost"
                className="lg:hidden size-11 rounded-full"
                aria-label="باز کردن منو"
                onClick={() => setMobileOpen(true)}>
                <PanelRightOpen className="size-5" />
            </Button>

            <WorkspaceSwitcher />

            <GlobalSearch />

            <ThemeSwitcher />

            <QuickCreate />

            <UserMenu />
        </header>
    );
};

export default Header;
