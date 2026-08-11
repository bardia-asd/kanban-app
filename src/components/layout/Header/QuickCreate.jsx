import { Plus } from "lucide-react";
import { Link } from "react-router";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip/tooltip";
import { Button } from "@/components/ui/button";

const QuickCreate = () => {
    return (
        <TooltipProvider>
            <Tooltip dir="rtl">
                <TooltipTrigger asChild>
                    <Button
                        asChild
                        className="h-11 w-11 rounded-full font-semibold md:w-auto">
                        <Link to="board">
                            <Plus className="size-5" />
                            <span className="hidden md:inline">ایجاد سریع</span>
                        </Link>
                    </Button>
                </TooltipTrigger>

                {/* Explain the action when the button is icon-only */}
                <TooltipContent>ساخت وظیفه جدید</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default QuickCreate;
