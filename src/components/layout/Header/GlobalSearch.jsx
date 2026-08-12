import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Search } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sidebarItems } from "@/data/sidebarData";

const GlobalSearch = () => {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Filter navigation items based on the search query
    const filteredSidebarItems = sidebarItems.filter((item) =>
        item.label.includes(searchQuery),
    );

    // Reset the search query when the dialog closes
    const handleOpenChange = (open) => {
        setOpen(open);

        if (!open) {
            setSearchQuery("");
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setOpen(true);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger className="min-w-0 flex-1 flex items-center gap-2 h-11 border border-border rounded-full text-sm px-4 bg-secondary/60 text-secondary-foreground hover:bg-secondary transition-colors cursor-pointer">
                <Search size={16} className="shrink-0" />
                <span className="truncate">جستجو در پروژه‌ها و وظایف...</span>
                <kbd className="ms-auto hidden md:inline px-2 py-0.5 rounded-full border border-border bg-background text-[10px]">
                    Ctrl K
                </kbd>
            </DialogTrigger>

            <DialogContent
                showCloseButton={false}
                className="p-0 overflow-hidden">
                <DialogTitle className="sr-only">جستجو</DialogTitle>

                <div className="relative border-b border-border overflow-hidden">
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Search size={16} />
                    </span>

                    <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="جستجوی تسک، پروژه یا عضو..."
                        className="rounded-none focus-visible:ring-0 ps-7 h-12"
                    />
                </div>

                <div className="max-h-80 overflow-y-auto p-1">
                    {filteredSidebarItems.length > 0 ? (
                        filteredSidebarItems.map((item) => (
                            <Button
                                key={item.label}
                                variant="ghost"
                                size="lg"
                                className="w-full justify-start px-3 text-sm"
                                asChild>
                                <Link
                                    to={item.to}
                                    onClick={() => setOpen(false)}>
                                    <item.icon size={20} />
                                    {item.label}
                                </Link>
                            </Button>
                        ))
                    ) : (
                        <div className="py-6 text-center text-sm">
                            نتیجه‌ای یافت نشد.
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default GlobalSearch;
