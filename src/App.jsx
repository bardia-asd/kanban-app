import { Button } from "./components/ui/button";
import {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectScrollUpButton,
    SelectScrollDownButton,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
} from "./components/ui/select";

const App = () => {
    return (
        <div className="w-full max-w-sm p-4">
            <Select defaultValue="medium" dir="rtl">
                <SelectTrigger>
                    <SelectValue placeholder="انتخاب اولویت" />
                </SelectTrigger>

                <SelectContent>
                    <SelectScrollUpButton />

                    <SelectGroup>
                        <SelectLabel>اولویت وظیفه</SelectLabel>

                        <SelectItem value="high">بالا</SelectItem>

                        <SelectItem value="medium">متوسط</SelectItem>

                        <SelectItem value="low">پایین</SelectItem>
                    </SelectGroup>

                    <SelectSeparator />

                    <SelectGroup>
                        <SelectLabel>وضعیت</SelectLabel>

                        <SelectItem value="todo">انجام نشده</SelectItem>

                        <SelectItem value="progress">در حال انجام</SelectItem>

                        <SelectItem value="done">انجام شده</SelectItem>
                    </SelectGroup>

                    <SelectScrollDownButton />
                </SelectContent>
            </Select>
        </div>
    );
};

export default App;
