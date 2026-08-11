import SidebarToggle from "./SidebarToggle";
import WorkspaceSwitcher from "./WorkspaceSwitcher";
import GlobalSearch from "./GlobalSearch";
import QuickCreate from "./QuickCreate";
import UserMenu from "./UserMenu";

const Header = () => {
    return (
        <header className="sticky top-0 z-40 flex items-center gap-2 h-18 border-b border-border bg-background/85 backdrop-blur-xl px-4 md:px-6">
            <SidebarToggle />

            <WorkspaceSwitcher />

            <GlobalSearch />

            <QuickCreate />

            <UserMenu />
        </header>
    );
};

export default Header;
