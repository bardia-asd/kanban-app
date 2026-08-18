import { formatNumberFa } from "@/utils/formatter";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronUp, MoreHorizontal, Plus } from "lucide-react";

const BoardColumn = ({ col }) => {
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
                            <DropdownMenuItem>جمع کردن ستون</DropdownMenuItem>
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
                        className="rounded-full size-8">
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
