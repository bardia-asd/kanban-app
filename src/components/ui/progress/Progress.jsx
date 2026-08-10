import { forwardRef } from "react";
import PropTypes from "prop-types";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/utils/utils";

/**
 * A reusable progress bar component built on top of Radix UI's Progress primitive.
 *
 * Supports:
 * - Controlled progress values through the `value` prop
 * - Forwarding refs to the underlying progress root
 * - Custom styling through `className`
 * - Additional Radix Progress props through `...props`
 */
const Progress = forwardRef(({ className = "", value, ...props }, ref) => {
    return (
        <ProgressPrimitive.Root
            ref={ref}
            value={value}
            className={cn(
                // Base progress track styles
                "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",

                // Allow consumers to override or extend the default styles
                className,
            )}
            {...props}>
            <ProgressPrimitive.Indicator
                className={
                    // Progress indicator styles
                    "w-full h-full flex-1 rounded-full bg-primary transition-all"
                }
                style={{
                    // Move the indicator to represent the current progress value
                    transform: `translateX(-${100 - value}%)`,
                }}
            />
        </ProgressPrimitive.Root>
    );
});

Progress.displayName = "Progress";

Progress.propTypes = {
    value: PropTypes.number,
    className: PropTypes.string,
};

export { Progress };
