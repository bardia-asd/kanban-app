import { Badge } from "./components/ui/badge";

const App = () => {
    return (
        <div dir="rtl" className="flex flex-wrap items-center gap-2">
            <Badge>فعال</Badge>

            <Badge variant="secondary">در انتظار</Badge>

            <Badge variant="destructive">لغو شده</Badge>

            <Badge variant="outline">پیش‌نویس</Badge>
        </div>
    );
};

export default App;
