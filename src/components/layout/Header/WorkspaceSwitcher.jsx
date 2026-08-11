import { ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const WorkspaceSwitcher = () => {
    return (
        <DropdownMenu dir="rtl">
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="lg"
                    className="group hidden rounded-full px-4 text-sm lg:inline-flex">
                    <span>تیم محصول</span>

                    {/* Rotate the icon when the menu is open */}
                    <ChevronDown
                        size={16}
                        className="transition-transform duration-200 group-data-[state=open]:rotate-180"
                    />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>فضاهای کاری</DropdownMenuLabel>

                {/* Available workspaces */}
                <DropdownMenuItem className="rounded-xl">
                    تیم محصول
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl">
                    تیم مهندسی
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Create a new workspace */}
                <DropdownMenuItem className="rounded-xl">
                    ساخت فضای کاری
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default WorkspaceSwitcher;
