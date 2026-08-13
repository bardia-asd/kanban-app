import PropTypes from "prop-types";
import { Card, CardContent } from "@/components/ui/card";
import { formatNumberFa } from "@/utils/formatter";

const StatCard = ({ label, value, color, icon: Icon }) => {
    return (
        <Card>
            <CardContent className="flex items-center gap-3 p-5">
                {/* Statistic icon with a subtle tinted background */}
                <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-full"
                    style={{
                        backgroundColor: `color-mix(in oklab, ${color} 14%, transparent)`,
                    }}>
                    <Icon size={20} style={{ color }} />
                </div>

                {/* Statistic label and formatted value */}
                <div>
                    <h4 className="truncate text-xs text-muted-foreground">
                        {label}
                    </h4>
                    <p className="text-2xl font-bold">
                        {formatNumberFa(value)}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

StatCard.propTypes = {
    /** Label describing the statistic. */
    label: PropTypes.string.isRequired,

    /** Numeric value displayed by the card. */
    value: PropTypes.number.isRequired,

    /** Accent color used for the icon and its background. */
    color: PropTypes.string.isRequired,

    /** Icon component displayed alongside the statistic. */
    icon: PropTypes.elementType.isRequired,
};

export default StatCard;
