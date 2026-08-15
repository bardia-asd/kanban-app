import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";

const MemberError = ({ onRefetch }) => {
    return (
        <Card className="md:col-span-2 xl:col-span-3">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <CircleAlert className="size-6" />
                </div>

                <h3 className="text-base font-semibold">
                    دریافت اعضا با مشکل مواجه شد
                </h3>

                <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                    امکان دریافت اطلاعات اعضای تیم وجود ندارد. لطفاً دوباره تلاش
                    کنید.
                </p>

                <Button
                    variant="outline"
                    className="mt-5 rounded-full"
                    onClick={onRefetch}>
                    تلاش مجدد
                </Button>
            </CardContent>
        </Card>
    );
};

export default MemberError;
