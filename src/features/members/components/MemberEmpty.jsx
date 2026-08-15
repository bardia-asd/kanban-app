import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const MemberEmpty = () => {
    return (
        <Card className="md:col-span-2 xl:col-span-3">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <Users className="mb-4 size-10 text-muted-foreground" />

                <h3 className="text-base font-semibold">عضوی پیدا نشد</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                    هنوز عضوی به تیم اضافه نشده است.
                </p>
            </CardContent>
        </Card>
    );
};

export default MemberEmpty;
