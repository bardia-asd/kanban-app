import { Button } from "./components/ui/button";
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "./components/ui/avatar";

const App = () => {
    return (
        <div className="flex items-center gap-3 p-4">
            <Avatar>

                <AvatarFallback>عر</AvatarFallback>
            </Avatar>

            <div>
                <p className="text-sm font-medium">علی رضایی</p>

                <p className="text-xs text-muted-foreground">توسعه‌دهنده</p>
            </div>
        </div>
    );
};

export default App;
