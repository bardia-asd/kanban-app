import { Outlet } from "react-router";
import Sidebar from "../Sidebar";
import { useSidebarStore } from "@/store/useSidebarStore";
import { Menu } from "lucide-react";

const AppLayout = () => {
    const toggleCollapsed = useSidebarStore((s) => s.toggleCollapsed);

    return (
        <div className="min-h-dvh bg-background text-foreground flex">
            <Sidebar />

            <div className="flex-1 flex flex-col min-w-0">
                <button
                    onClick={() => toggleCollapsed()}
                    className="size-10 flex items-center justify-center rounded-full hover:bg-secondary">
                    <Menu className="size-5" />
                </button>

                <main className="flex-1 min-w-0 container max-w-[1600px] mx-auto px-4 pb-24 pt-6 md:px-6 lg:pb-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AppLayout;
