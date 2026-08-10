import { Button } from "./components/ui/button";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "./components/ui/collapsible";

const App = () => {
    return (
        <div className="w-full max-w-md p-4">
            <Collapsible>
                <CollapsibleTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-full justify-between">
                        جزئیات بیشتر
                        <span>⌄</span>
                    </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="space-y-3 pt-3">
                    <div className="rounded-md border p-3">
                        <p className="text-sm font-medium">توضیحات</p>

                        <p className="mt-1 text-sm text-muted-foreground">
                            طراحی و پیاده‌سازی صفحه داشبورد با رعایت اصول طراحی
                            واکنش‌گرا.
                        </p>
                    </div>

                    <div className="rounded-md border p-3">
                        <p className="text-sm font-medium">مسئول</p>

                        <p className="mt-1 text-sm text-muted-foreground">
                            علی رضایی
                        </p>
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
};

export default App;
