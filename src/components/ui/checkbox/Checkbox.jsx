import { forwardRef } from "react";
import PropTypes from "prop-types";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/utils/utils";

/**
 * A reusable checkbox component built on top of Radix UI's Checkbox primitive.
 *
 * Supports:
 * - Controlled and uncontrolled checkbox state through Radix UI
 * - Forwarding refs to the underlying checkbox element
 * - Custom styling through `className`
 * - Additional Radix Checkbox props through `...props`
 * - Built-in check icon when the checkbox is checked
 */
const Checkbox = forwardRef(({ className = "", ...props }, ref) => {
    return (
        <CheckboxPrimitive.Root
            ref={ref}
            className={cn(
                // Base checkbox styles
                "peer flex size-5 shrink-0 items-center justify-center rounded-full border border-primary",

                // Interaction and focus styles
                "cursor-pointer shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",

                // Disabled state
                "disabled:cursor-not-allowed disabled:opacity-50",

                // Checked state
                "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",

                // Allow consumers to override or extend the default styles
                className,
            )}
            {...props}>
            <CheckboxPrimitive.Indicator
                className={
                    // Center the check icon inside the checkbox
                    "flex items-center justify-center"
                }>
                <Check size={16} />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
});

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
    /**
     * Additional Tailwind CSS classes.
     */
    className: PropTypes.string,
};

export { Checkbox };
