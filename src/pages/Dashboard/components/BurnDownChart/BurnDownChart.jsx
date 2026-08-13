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
import {
    Area,
    AreaChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const burnDown = [
    { s: "هفته ۱", remaining: 48 },
    { s: "هفته ۲", remaining: 39 },
    { s: "هفته ۳", remaining: 30 },
    { s: "هفته ۴", remaining: 18 },
    { s: "هفته ۵", remaining: 9 },
];

const BurnDownChart = () => {
    const theme = useChartTheme();

    return (
        <Card>
            <CardHeader className="flex-col gap-0">
                <CardTitle>عملکرد هفتگی</CardTitle>
                <CardDescription>
                    وظایف ایجادشده در برابر تکمیل‌شده
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer>
                    <AreaChart data={burnDown}>
                        <defs>
                            <linearGradient
                                id="burndownGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1">
                                <stop
                                    offset="0%"
                                    stopColor={theme.series[0]}
                                    stopOpacity={0.3}
                                />
                                <stop
                                    offset="100%"
                                    stopColor={theme.series[0]}
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke={theme.grid}
                        />
                        <XAxis
                            dataKey="s"
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

                        <Area
                            dataKey="remaining"
                            name="باقی‌مانده"
                            type="monotone"
                            stroke={theme.series[0]}
                            strokeWidth={2}
                            fill="url(#burndownGradient)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default BurnDownChart;
