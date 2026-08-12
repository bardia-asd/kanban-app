import { useSidebarStore } from "@/store/useSidebarStore";

const SidebarHeader = () => {
    const collapsed = useSidebarStore((s) => s.collapsed);

    return (
        <div className="flex items-center gap-3 border-b border-sidebar-border px-4 h-18">
            {/* Workspace logo */}
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                ک
            </div>

            {/* Hide workspace information when the sidebar is collapsed */}
            {!collapsed && (
                <div>
                    <h3 className="truncate font-bold">کانبان‌پرو</h3>
                    <p className="truncate text-xs text-muted-foreground">
                        فضای کاری تیم محصول
                    </p>
                </div>
            )}
        </div>
    );
};

export default SidebarHeader;
