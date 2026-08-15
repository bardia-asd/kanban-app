import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const MemberCardSkeleton = () => {
    return (
        <>
            {Array.from({ length: 6 }).map((_, index) => (
                <Card key={index}>
                    <CardContent className="flex items-center gap-4 p-5">
                        <Skeleton className="size-14 shrink-0 rounded-xl" />

                        <div className="min-w-0 flex-1 space-y-2">
                            <Skeleton className="h-4 w-28" />
                            <Skeleton className="h-3 w-20" />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};

export default MemberCardSkeleton;
