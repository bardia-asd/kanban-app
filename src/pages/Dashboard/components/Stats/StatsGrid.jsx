import { CheckCircle2, Clock3, ListTodo, TrendingUp } from "lucide-react";

import StatCard from "./StatCard";

const stats = [
    {
        label: "کل وظایف",
        value: 10,
        icon: ListTodo,
        color: "var(--info)",
    },
    {
        label: "تکمیل شده",
        value: 2,
        icon: CheckCircle2,
        color: "var(--success)",
    },
    {
        label: "در حال انجام",
        value: 2,
        icon: Clock3,
        color: "var(--warning)",
    },
    {
        label: "دارای تأخیر",
        value: 5,
        icon: TrendingUp,
        color: "var(--destructive)",
    },
];

const StatsGrid = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* Render each statistic using the reusable StatCard component */}
            {stats.map((stat) => (
                <StatCard
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                    color={stat.color}
                    icon={stat.icon}
                />
            ))}
        </div>
    );
};

export default StatsGrid;
