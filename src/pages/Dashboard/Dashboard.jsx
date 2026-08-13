import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";

import StatsGrid from "./components/Stats/StatsGrid";

const Dashboard = () => {
    return (
        <div className="space-y-6">
            <PageHeader
                title="داشبورد"
                description="خلاصه‌ای از وضعیت پروژه‌ها و وظایف شما"
                actions={
                    <Button
                        size="lg"
                        className="rounded-full px-4 h-11 text-sm"
                        asChild>
                        <Link to="/board">
                            رفتن به برد
                            <ArrowLeft size={16} />
                        </Link>
                    </Button>
                }
            />

            <StatsGrid />
        </div>
    );
};

export default Dashboard;
