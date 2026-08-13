import { useMemo } from "react";
import { useThemeStore } from "@/store/useThemeStore";

// Reads a CSS custom property's resolved value from the root element.
const readCssVar = (name) => {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
};

export const useChartTheme = () => {
    const theme = useThemeStore((state) => state.theme);

    return useMemo(() => {
        return {
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
        };
    }, [theme]);
};
