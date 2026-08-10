import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Checkbox } from "./components/ui/checkbox";
import { Label } from "./components/ui/label";

const App = () => {
    return (
        <div className="flex items-center gap-2 p-4">
            <Checkbox id="terms" />

            <Label htmlFor="terms">قوانین و شرایط را می‌پذیرم</Label>
        </div>
    );
};

export default App;
