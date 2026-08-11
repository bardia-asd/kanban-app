import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const UserMenu = () => {
    return (
        <DropdownMenu dir="rtl">
            <DropdownMenuTrigger asChild>
                <Button
                    variant="icon"
                    className="size-11 rounded-2xl"
                    aria-label="حساب کاربری">
                    {/* User avatar */}
                    <Avatar className="size-11 rounded-2xl">
                        <AvatarFallback className="rounded-2xl bg-primary-soft text-primary">
                            سا
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                {/* User information */}
                <DropdownMenuLabel>سارا احمدی</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* Account actions */}
                <DropdownMenuItem className="rounded-xl">
                    پروفایل
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl">
                    تنظیمات
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl text-destructive">
                    خروج
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserMenu;
