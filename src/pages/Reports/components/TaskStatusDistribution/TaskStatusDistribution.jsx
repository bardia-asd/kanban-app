import {
    CartesianGrid,
    Cell,
    Legend,
    Pie,
    PieChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartContainer,
    useChartTheme,
    ChartTooltip,
} from "@/components/ui/charts";
import { formatNumberFa } from "@/utils/formatter";

const taskStatusDistribution = [
    {
        status: "تکمیل‌شده",
        count: 128,
    },
    {
        status: "در حال انجام",
        count: 74,
    },
    {
        status: "در انتظار",
        count: 32,
    },
    {
        status: "لغوشده",
        count: 16,
    },
];

const TaskStatusDistribution = () => {
    const theme = useChartTheme();

    return (
        <Card>
            <CardHeader>
                <CardTitle>توزیع وضعیت وظایف</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer>
                    <PieChart>
                        <Legend wrapperStyle={{ fontSize: 12 }} />
                        <Tooltip
                            content={
                                <ChartTooltip valueFormatter={formatNumberFa} />
                            }
                        />
                        <Pie
                            data={taskStatusDistribution}
                            dataKey="count"
                            nameKey="status"
                            cx="50%"
                            cy="50%"
                            innerRadius="55%"
                            outerRadius="85%">
                            {taskStatusDistribution.map((entry, i) => (
                                <Cell
                                    key={`cell-${entry.status}`}
                                    fill={theme.series[i]}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default TaskStatusDistribution;
