import { formatNumberFa } from "@/utils/formatter";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, MoreHorizontal, Plus } from "lucide-react";
import { useState } from "react";

const BoardColumn = ({ col }) => {
    const [collapsed, setCollapsed] = useState(false);

    if (collapsed) {
        return (
            <button
                type="button"
                onClick={() => setCollapsed(false)}
                className="flex h-30 w-14 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card text-xs font-semibold transition-colors hover:bg-secondary cursor-pointer"
                aria-label={`باز کردن ستون ${col.title}`}>
                <ChevronDown className="size-4" />

                <span className="[writing-mode:vertical-rl]">{col.title}</span>
            </button>
        );
    }

    return (
        <section
            className="shrink-0 flex flex-col gap-3 w-76 bg-secondary/40 border border-border rounded-3xl p-3"
            aria-label={col.title}>
            <header className="flex items-center justify-between gap-2 px-1">
                <div className="flex items-center gap-2">
                    <span
                        className="size-2.5 rounded-full"
                        style={{ backgroundColor: col.accent }}
                    />
                    <h3 className="truncate text-sm font-bold">{col.title}</h3>
                    <span className="px-2 py-0.5 text-xs text-muted-foreground">
                        {formatNumberFa(col.wip_limit)}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="rounded-full size-8">
                                <MoreHorizontal size={16} />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                            <DropdownMenuItem>تغییر نام</DropdownMenuItem>
                            <DropdownMenuItem
                                onSelect={() => setCollapsed(true)}>
                                جمع کردن ستون
                            </DropdownMenuItem>
                            <DropdownMenuItem>افزایش سقف WIP</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                                حذف ستون
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full size-8"
                        onClick={() => setCollapsed(true)}
                        aria-label={`جمع کردن ستون ${col.title}`}>
                        <ChevronUp size={16} />
                    </Button>
                </div>
            </header>

            <div className="flex flex-col gap-3 min-h-20">
                {/* Tasks show here */}
                <Button
                    size="lg"
                    variant="ghost"
                    className="text-sm justify-start rounded-full">
                    <Plus size={16} /> افزودن وظیفه
                </Button>
            </div>
        </section>
    );
};

export default BoardColumn;
