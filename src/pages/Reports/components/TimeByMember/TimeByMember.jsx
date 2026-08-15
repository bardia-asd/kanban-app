import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
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

const timeByMember = [
    { name: "امیر", h: 34 },
    { name: "نگار", h: 26 },
    { name: "کاوه", h: 41 },
    { name: "مریم", h: 18 },
    { name: "سارا", h: 22 },
];

const TimeByMember = () => {
    const theme = useChartTheme();

    return (
        <Card className="xl:col-span-2">
            <CardHeader>
                <CardTitle>زمان ثبت‌شده هر عضو (ساعت)</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer>
                    <BarChart data={timeByMember}>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke={theme.grid}
                        />

                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            axisLine={false}
                            stroke={theme.axis}
                            reversed
                            tick={{
                                fontSize: 12,
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
                            dataKey="h"
                            name="ساعت"
                            fill={theme.series[0]}
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default TimeByMember;
