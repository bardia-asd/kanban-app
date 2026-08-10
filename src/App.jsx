import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Toaster } from "./components/ui/toaster/Toaster";

const App = () => {
    useEffect(() => {
        toast.success("وظیفه با موفقیت اضافه شد");
    }, []);

    return (
        <div className="flex items-center gap-3 p-4">
            <Toaster />
        </div>
    );
};

export default App;
