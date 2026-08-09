import { Button } from "./components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuPortal,
    DropdownMenuGroup,
    DropdownMenuSub,
    DropdownMenuRadioGroup,
    DropdownMenuContent,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
} from "./components/ui/dropdown-menu";

const App = () => {
    return (
        <div className="p-4">
            <DropdownMenu dir="rtl">
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">گزینه‌ها</Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuLabel>مدیریت وظیفه</DropdownMenuLabel>

                    <DropdownMenuSeparator />

                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            ویرایش
                            <DropdownMenuShortcut>
                                Ctrl + E
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            کپی کردن
                            <DropdownMenuShortcut>
                                Ctrl + C
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            حذف
                            <DropdownMenuShortcut>Del</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator />

                    <DropdownMenuCheckboxItem checked>
                        نمایش جزئیات
                    </DropdownMenuCheckboxItem>

                    <DropdownMenuCheckboxItem>
                        نمایش تاریخ
                    </DropdownMenuCheckboxItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>اولویت</DropdownMenuSubTrigger>

                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuRadioGroup value="high">
                                    <DropdownMenuRadioItem value="high">
                                        بالا
                                    </DropdownMenuRadioItem>

                                    <DropdownMenuRadioItem value="medium">
                                        متوسط
                                    </DropdownMenuRadioItem>

                                    <DropdownMenuRadioItem value="low">
                                        پایین
                                    </DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default App;
