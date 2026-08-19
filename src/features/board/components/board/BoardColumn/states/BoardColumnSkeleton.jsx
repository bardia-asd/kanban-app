import { Skeleton } from "@/components/ui/skeleton";

const BoardColumnSkeleton = () => {
    return Array.from({ length: 3 }).map((_, i) => (
        <section
            key={i}
            className="shrink-0 flex flex-col gap-3 w-76 bg-secondary/40 border border-border rounded-3xl p-3">
            {/* Header */}
            <header className="flex items-center justify-between gap-2 px-1">
                <div className="flex items-center gap-2">
                    <Skeleton className="size-2.5 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-6 rounded-md" />
                </div>

                <div className="flex items-center gap-2">
                    <Skeleton className="size-8 rounded-full" />
                    <Skeleton className="size-8 rounded-full" />
                </div>
            </header>

            {/* Tasks */}
            <div className="flex flex-col gap-3 min-h-20">
                <Skeleton className="h-24 w-full rounded-2xl" />
                <Skeleton className="h-24 w-full rounded-2xl" />
                <Skeleton className="h-24 w-full rounded-2xl" />
            </div>

            {/* Add task */}
            <Skeleton className="h-10 w-full rounded-full" />
        </section>
    ));
};

export { BoardColumnSkeleton };
