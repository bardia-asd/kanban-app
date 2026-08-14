import { Outlet } from "react-router";
import Sidebar, { MobileSidebar } from "../Sidebar";
import Header from "../Header";
import MobileNav from "../MobileNav/MobileNav";

const AppLayout = () => {
    return (
        <div className="min-h-dvh bg-background text-foreground flex">
            <Sidebar />
            <MobileSidebar />

            <div className="flex-1 flex flex-col min-w-0">
                <Header />
                <main className="flex-1 min-w-0 container max-w-[1600px] mx-auto px-4 pb-24 pt-6 md:px-6 lg:pb-8">
                    <div className="space-y-6">
                        <Outlet />
                    </div>
                </main>
            </div>

            <MobileNav />
        </div>
    );
};

export default AppLayout;
