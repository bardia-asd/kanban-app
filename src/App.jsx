import { useState } from "react";
import { Button } from "./components/ui/button";
import { Switch } from "./components/ui/switch";
import { Label } from "./components/ui/label";

const App = () => {
    const [activeTab, setActiveTab] = useState("board");

    return (
        <div className="flex items-center gap-3 p-4">
            <Switch id="notifications" />

            <Label htmlFor="notifications">فعال کردن اعلان‌ها</Label>
        </div>
    );
};

export default App;
