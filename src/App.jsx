import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Progress } from "./components/ui/progress";

const App = () => {
    return (
        <div className="w-full max-w-md space-y-2 p-4">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium">پیشرفت پروژه</span>

                <span className="text-sm text-muted-foreground">45٪</span>
            </div>

            <Progress value={45} />
        </div>
    );
};

export default App;
