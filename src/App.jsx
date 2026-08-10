import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import {
    Drawer,
    DrawerPortal,
    DrawerOverlay,
    DrawerTrigger,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle,
    DrawerDescription,
} from "./components/ui/drawer";

const App = () => {
    return (
        <div className="p-4">
            <Drawer direction="left">
                <DrawerTrigger asChild>
                    <Button>مشاهده وظیفه</Button>
                </DrawerTrigger>

                <DrawerContent className="max-w-md w-full">
                    <DrawerHeader>
                        <DrawerTitle>جزئیات وظیفه</DrawerTitle>

                        <DrawerDescription>
                            اطلاعات و جزئیات این وظیفه را مشاهده کنید.
                        </DrawerDescription>
                    </DrawerHeader>

                    <div className="space-y-4 px-4">
                        <div>
                            <p className="text-sm font-medium">عنوان</p>

                            <p className="mt-1 text-sm text-muted-foreground">
                                طراحی صفحه داشبورد
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-medium">وضعیت</p>

                            <Badge className="mt-1">در حال انجام</Badge>
                        </div>

                        <div>
                            <p className="text-sm font-medium">اولویت</p>

                            <p className="mt-1 text-sm text-muted-foreground">
                                بالا
                            </p>
                        </div>
                    </div>

                    <DrawerFooter>
                        <Button>ویرایش وظیفه</Button>

                        <DrawerClose asChild>
                            <Button variant="outline">بستن</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default App;
