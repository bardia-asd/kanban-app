import { useState } from "react";
import { Button } from "./components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";

const App = () => {
    const [activeTab, setActiveTab] = useState("board");

    return (
        <div className="p-4">
            <Tabs
                dir="rtl"
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full">
                <TabsList>
                    <TabsTrigger value="board">برد</TabsTrigger>

                    <TabsTrigger value="list">لیست</TabsTrigger>

                    <TabsTrigger value="activity">فعالیت‌ها</TabsTrigger>
                </TabsList>

                <TabsContent value="board">محتوای برد</TabsContent>

                <TabsContent value="list">لیست وظایف</TabsContent>

                <TabsContent value="activity">فعالیت‌های اخیر</TabsContent>
            </Tabs>
        </div>
    );
};

export default App;
