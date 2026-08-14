import { ArchiveIcon } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const Archive = () => {
    return (
        <>
            <PageHeader title="آرشیو" description="وظایف آرشیوشده" />

            <Card>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
                        <ArchiveIcon className="size-6 text-muted-foreground" />
                    </div>

                    <h3 className="text-base font-semibold">آرشیو خالی است</h3>

                    <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                        هنوز هیچ پروژه یا وظیفه‌ای به آرشیو منتقل نشده است.
                    </p>
                </CardContent>
            </Card>
        </>
    );
};

export default Archive;
