import PropTypes from "prop-types";
import { ResponsiveContainer } from "recharts";

const ChartContainer = ({
    height = 300,
    isEmpty = false,
    emptyMessage = "داده‌ای برای نمایش وجود ندارد",
    children,
}) => {
    // Display an empty state instead of rendering the chart
    if (isEmpty) {
        return (
            <div
                className="flex items-center justify-center text-sm text-muted-foreground"
                style={{ height }}>
                {emptyMessage}
            </div>
        );
    }

    return (
        <div dir="rtl" style={{ height }}>
            <ResponsiveContainer width="100%" height="100%">
                {children}
            </ResponsiveContainer>
        </div>
    );
};

ChartContainer.propTypes = {
    height: PropTypes.number,
    isEmpty: PropTypes.bool,
    emptyMessage: PropTypes.string,
    children: PropTypes.node,
};

export { ChartContainer };
