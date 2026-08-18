import { Columns3, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BoardColumnEmpty = ({ onAddColumn }) => {
    return (
        <Card className="w-full">
            <CardContent className="flex min-h-64 flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
                    <Columns3 className="size-6 text-muted-foreground" />
                </div>

                <h3 className="text-base font-semibold">
                    هنوز ستونی ایجاد نشده است
                </h3>

                <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                    برای شروع کار، اولین ستون برد خود را ایجاد کنید.
                </p>

                <Button className="mt-5 rounded-full" onClick={onAddColumn}>
                    <Plus className="size-4" />
                    افزودن ستون
                </Button>
            </CardContent>
        </Card>
    );
};

export { BoardColumnEmpty };
