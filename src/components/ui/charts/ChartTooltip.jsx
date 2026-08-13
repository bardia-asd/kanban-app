import PropTypes from "prop-types";
import { useChartTheme } from "./useChartTheme";

const ChartTooltip = ({
    active,
    payload,
    label,
    labelFormatter,
    valueFormatter,
}) => {
    const theme = useChartTheme();

    // Render nothing when the tooltip is inactive or has no data
    if (!active || !payload || payload.length === 0) return null;

    return (
        <div
            className="rounded-lg px-3 py-2 text-sm shadow-md"
            style={{
                background: theme.tooltipBg,
                border: `1px solid ${theme.tooltipBorder}`,
                color: theme.tooltipText,
            }}>
            {label && (
                <p className="mb-2 text-xs text-muted-foreground">
                    {labelFormatter ? labelFormatter(label) : label}
                </p>
            )}

            <div className="flex flex-col gap-1">
                {payload.map((entry, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-1.5">
                            <span
                                className="inline-block size-2 rounded-full"
                                style={{ background: entry.color }}
                            />
                            <span style={{ color: entry.color }}>
                                {entry.name}
                            </span>
                        </div>

                        <span className="font-medium tabular-nums">
                            {valueFormatter
                                ? valueFormatter(entry.value, entry.name)
                                : entry.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

ChartTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    labelFormatter: PropTypes.func,
    valueFormatter: PropTypes.func,
};

export { ChartTooltip };
