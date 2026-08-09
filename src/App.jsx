import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./components/ui/card/Card";

const App = () => {
    return (
        <div className="w-full max-w-lg p-4">
            <Card>
                <CardHeader className="items-center">
                    <CardTitle>وظایف امروز</CardTitle>

                    <CardDescription>
                        لیست وظایفی که برای امروز در نظر گرفته‌اید
                    </CardDescription>

                    <Button variant="outline" size="sm">
                        افزودن
                    </Button>
                </CardHeader>

                <CardContent>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm">طراحی صفحه اصلی</span>

                            <Badge>انجام شده</Badge>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm">پیاده‌سازی داشبورد</span>

                            <Badge variant="secondary">در حال انجام</Badge>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm">تست برنامه</span>

                            <Badge variant="outline">در انتظار</Badge>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="justify-between">
                    <span className="text-sm text-muted-foreground">
                        ۳ وظیفه
                    </span>

                    <Button size="sm">مشاهده همه</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default App;
