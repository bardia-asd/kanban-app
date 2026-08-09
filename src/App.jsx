import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
    Dialog,
    DialogTrigger,
    DialogClose,
    DialogPortal,
    DialogOverlay,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from "./components/ui/dialog";

const App = () => {
    return (
        <div className="p-5">
            <Dialog>
                <DialogTrigger asChild>
                    <Button>افزودن وظیفه</Button>
                </DialogTrigger>

                <DialogPortal>
                    <DialogOverlay />

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>افزودن وظیفه جدید</DialogTitle>

                            <DialogDescription>
                                اطلاعات وظیفه جدید را وارد کنید.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4 py-4">
                            <Input placeholder="عنوان وظیفه" />

                            <Input placeholder="توضیحات" />
                        </div>

                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">انصراف</Button>
                            </DialogClose>

                            <Button>افزودن وظیفه</Button>
                        </DialogFooter>
                    </DialogContent>
                </DialogPortal>
            </Dialog>
        </div>
    );
};

export default App;
