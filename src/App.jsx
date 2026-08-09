import { Label } from "./components/ui/label/Label";
import { Textarea } from "./components/ui/textarea/Textarea";

const App = () => {
    return (
        <div className="max-w-md space-y-5 p-5">
            <Label htmlFor="textarea">توضیحات</Label>
            <Textarea id="textarea" placeholder="جزئیات وظیفه را بنویسید..." />
        </div>
    );
};

export default App;
