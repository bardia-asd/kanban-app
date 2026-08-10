import { Skeleton } from "./components/ui/Skeleton";
import { Card, CardHeader, CardContent } from "./components/ui/card";

const App = () => {
    return (
        <div className="max-w-md p-4">
            <Card>
                <CardHeader>
                    <Skeleton className="h-5 w-40" />
                    <Skeleton className="h-4 w-64" />
                </CardHeader>

                <CardContent className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-3/4" />
                </CardContent>
            </Card>
        </div>
    );
};

export default App;
