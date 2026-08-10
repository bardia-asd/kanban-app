import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "./components/ui/tooltip";

const App = () => {
    return (
        <div className="p-4">
            <TooltipProvider>
                <div className="flex items-center gap-2">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                                ✏️
                            </Button>
                        </TooltipTrigger>

                        <TooltipContent align="start">ویرایش وظیفه</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                                🗑️
                            </Button>
                        </TooltipTrigger>

                        <TooltipContent>حذف وظیفه</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                                ⋮
                            </Button>
                        </TooltipTrigger>

                        <TooltipContent align="end">گزینه‌های بیشتر</TooltipContent>
                    </Tooltip>
                </div>
            </TooltipProvider>
        </div>
    );
};

export default App;
