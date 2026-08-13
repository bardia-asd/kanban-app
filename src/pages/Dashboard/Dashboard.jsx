import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";

import StatsGrid from "./components/Stats/StatsGrid";
import WeeklyPerformance from "./components/WeeklyPerformance";
import BurnDownChart from "./components/BurnDownChart";
import UpcomingDeadlines from "./components/UpcomingDeadlines";
import ProjectsProgress from "./components/ProjectsProgress";
import LatestActivities from "./components/LatestActivities/LatestActivities";

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

            <div className="grid gap-4 xl:grid-cols-3">
                <WeeklyPerformance />
                <BurnDownChart />
            </div>

            <div className="grid gap-4 xl:grid-cols-3">
                <UpcomingDeadlines />

                <ProjectsProgress />

                <LatestActivities />
            </div>
        </div>
    );
};

export default Dashboard;
