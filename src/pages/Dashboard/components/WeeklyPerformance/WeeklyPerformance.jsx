import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartContainer,
    useChartTheme,
    ChartTooltip,
} from "@/components/ui/charts";
import { formatNumberFa } from "@/utils/formatter";

const weekly = [
    { day: "شنبه", completed: 4, created: 6 },
    { day: "یکشنبه", completed: 7, created: 5 },
    { day: "دوشنبه", completed: 5, created: 8 },
    { day: "سه‌شنبه", completed: 9, created: 4 },
    { day: "چهارشنبه", completed: 6, created: 7 },
    { day: "پنجشنبه", completed: 11, created: 3 },
    { day: "جمعه", completed: 2, created: 1 },
];

const WeeklyPerformance = () => {
    const theme = useChartTheme();

    return (
        <Card className="xl:col-span-2">
            <CardHeader className="flex-col gap-0">
                <CardTitle>عملکرد هفتگی</CardTitle>
                <CardDescription>
                    وظایف ایجادشده در برابر تکمیل‌شده
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer>
                    <BarChart data={weekly} responsive>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke={theme.grid}
                        />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            axisLine={false}
                            stroke={theme.axis}
                            reversed
                            tick={{
                                fontSize: 14,
                            }}
                        />

                        <YAxis
                            stroke={theme.axis}
                            tickLine={false}
                            axisLine={false}
                            orientation="right"
                            tickFormatter={formatNumberFa}
                            tick={{
                                fontSize: 12,
                            }}
                        />

                        <Legend wrapperStyle={{ fontSize: 12 }} />
                        <Tooltip
                            content={
                                <ChartTooltip valueFormatter={formatNumberFa} />
                            }
                            cursor={{
                                fill: theme.grid,
                                opacity: 0.35,
                            }}
                        />

                        <Bar
                            dataKey="completed"
                            name="تکمیل‌شده"
                            fill={theme.series[0]}
                            radius={[8, 8, 0, 0]}
                        />
                        <Bar
                            dataKey="created"
                            fill={theme.series[1]}
                            name="ایجادشده"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default WeeklyPerformance;
