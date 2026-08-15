import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
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

const velocity = [
    { s: "اسپرینت ۱", v: 21 },
    { s: "اسپرینت ۲", v: 28 },
    { s: "اسپرینت ۳", v: 24 },
    { s: "اسپرینت ۴", v: 34 },
    { s: "اسپرینت ۵", v: 31 },
];

const TeamVelocity = () => {
    const theme = useChartTheme();

    return (
        <Card>
            <CardHeader>
                <CardTitle>سرعت تیم</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer>
                    <LineChart data={velocity}>
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
                        />

                        <Line
                            dataKey="v"
                            name="سرعت"
                            type="monotone"
                            stroke={theme.series[0]}
                            strokeWidth={2}
                            dot
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default TeamVelocity;
