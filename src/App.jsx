import { useState } from "react";
import { Button } from "./components/ui/button";
import {Toggle} from "./components/ui/toggle";

const App = () => {
    const [activeTab, setActiveTab] = useState("board");

    return (
        <div className="flex items-center gap-2 p-4">
            <Toggle>نمایش تکمیل‌شده‌ها</Toggle>

            <Toggle variant="outline">فیلتر</Toggle>
        </div>
    );
};

export default App;
