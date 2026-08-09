import PropTypes from "prop-types";
import { forwardRef } from "react";
import { cn } from "@/utils/utils";

/**
 * A reusable textarea component built on top of the native HTML textarea element.
 *
 * Supports:
 * - All standard HTML textarea attributes through `...props`
 * - Forwarding refs to the underlying textarea element
 * - Custom styling through `className`
 * - Consistent styling with the application's input components
 */
const Textarea = forwardRef(({ className = "", ...props }, ref) => {
    return (
        <textarea
            ref={ref}
            className={cn(
                // Base textarea styles
                "resize-none min-h-16 w-full rounded-md border border-input",

                // Spacing, typography, and background
                "bg-transparent px-3 py-2 text-base md:text-sm",

                // Shadow and placeholder styles
                "shadow-sm placeholder:text-muted-foreground",

                // Focus styles
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",

                // Disabled state
                "disabled:cursor-not-allowed disabled:opacity-50",

                // Allow consumers to override or extend the default styles
                className,
            )}
            {...props}
        />
    );
});

Textarea.displayName = "Textarea";

Textarea.propTypes = {
    /**
     * Additional Tailwind CSS classes.
     */
    className: PropTypes.string,
};

export { Textarea };
