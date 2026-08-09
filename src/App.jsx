import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogPortal,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
} from "./components/ui/alert-dialog";

const App = () => {
    return (
        <div className="p-4">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive">حذف وظیفه</Button>
                </AlertDialogTrigger>

                <AlertDialogPortal>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>حذف وظیفه</AlertDialogTitle>

                            <AlertDialogDescription>
                                آیا مطمئن هستید که می‌خواهید این وظیفه را حذف
                                کنید؟ این عملیات قابل بازگشت نیست.
                            </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                            <AlertDialogCancel>انصراف</AlertDialogCancel>

                            <AlertDialogAction>حذف</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogPortal>
            </AlertDialog>
        </div>
    );
};

export default App;
