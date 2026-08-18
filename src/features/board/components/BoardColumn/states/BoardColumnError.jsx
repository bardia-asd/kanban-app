import PropTypes from "prop-types";
import { CircleAlert, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BoardColumnError = ({
    message = "نتوانستیم اطلاعات ستون‌های برد را دریافت کنیم. لطفا دوباره تلاش کنید.",
    onRetry,
}) => {
    return (
        <Card className="w-full">
            <CardContent className="flex min-h-64 flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <CircleAlert className="size-6" />
                </div>

                <h3 className="text-base font-semibold">
                    دریافت ستون‌ها با مشکل مواجه شد
                </h3>

                <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                    {message}
                </p>

                <Button
                    variant="outline"
                    className="mt-5 rounded-full"
                    onClick={onRetry}>
                    <RefreshCw className="size-4" />
                    تلاش مجدد
                </Button>
            </CardContent>
        </Card>
    );
};

BoardColumnError.prototype = {
    message: PropTypes.string,
    onRetry: PropTypes.func,
};

export { BoardColumnError };
