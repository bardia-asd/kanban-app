import PageHeader from "@/components/layout/PageHeader";
import TeamVelocity from "./components/TeamVelocity";
import TaskStatusDistribution from "./components/TaskStatusDistribution";
import TimeByMember from "./components/TimeByMember";

const Reports = () => {
    return (
        <>
            <PageHeader
                title="گزارش‌ها"
                description="تحلیل عملکرد و بهره‌وری تیم"
            />

            <div className="grid gap-4 xl:grid-cols-2">
                <TeamVelocity />

                <TaskStatusDistribution />

                <TimeByMember />
            </div>
        </>
    );
};

export default Reports;
