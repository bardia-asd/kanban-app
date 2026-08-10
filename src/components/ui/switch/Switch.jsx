import { forwardRef } from "react";
import PropTypes from "prop-types";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/utils/utils";

/**
 * A reusable switch component built on top of Radix UI's Switch primitive.
 *
 * Supports:
 * - Controlled and uncontrolled switch state through Radix UI
 * - Forwarding refs to the underlying switch element
 * - Custom styling through `className`
 * - Additional Radix Switch props through `...props`
 * - Animated thumb movement between checked and unchecked states
 */
const Switch = forwardRef(({ className = "", ...props }, ref) => {
    return (
        <SwitchPrimitives.Root
            ref={ref}
            className={cn(
                // Base switch styles
                "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors",

                // Focus styles
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",

                // Disabled state
                "disabled:cursor-not-allowed disabled:opacity-50",

                // Checked and unchecked states
                "data-[state=checked]:bg-primary",
                "data-[state=unchecked]:bg-input",

                // Allow consumers to override or extend the default styles
                className,
            )}
            {...props}>
            <SwitchPrimitives.Thumb
                className={cn(
                    // Base thumb styles
                    "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform",

                    // Move the thumb when the switch is checked
                    "data-[state=checked]:-translate-x-4",

                    // Reset the thumb position when unchecked
                    "data-[state=unchecked]:translate-x-0",
                )}
            />
        </SwitchPrimitives.Root>
    );
});

Switch.displayName = "Switch";

Switch.propTypes = {
    /**
     * Additional Tailwind CSS classes.
     */
    className: PropTypes.string,
};

export { Switch };
