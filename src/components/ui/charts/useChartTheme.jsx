import { useEffect, useState } from "react";
import { useThemeStore } from "@/store/useThemeStore";

const readCssVar = (name) => {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
};

const getChartTheme = () => ({
    grid: readCssVar("--border"),
    axis: readCssVar("--muted-foreground"),
    tooltipBg: readCssVar("--card"),
    tooltipBorder: readCssVar("--border"),
    tooltipText: readCssVar("--foreground"),
    series: [
        readCssVar("--chart-1"),
        readCssVar("--chart-2"),
        readCssVar("--chart-3"),
        readCssVar("--chart-4"),
        readCssVar("--chart-5"),
    ].filter(Boolean),
});

export const useChartTheme = () => {
    const theme = useThemeStore((state) => state.theme);
    const [chartTheme, setChartTheme] = useState(getChartTheme);

    useEffect(() => {
        // Wait until the theme class/data attribute has been applied.
        requestAnimationFrame(() => {
            setChartTheme(getChartTheme());
        });
    }, [theme]);

    return chartTheme;
};
