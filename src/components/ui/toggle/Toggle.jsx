import { forwardRef } from "react";
import PropTypes from "prop-types";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/utils";

/**
 * Defines the available visual variants and sizes for the Toggle component.
 *
 * `cva` keeps the shared styles in one place while allowing the component
 * to switch between different visual variants and sizes.
 */
export const toggleVariants = cva(
    // Base styles shared by every toggle variant and size
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium cursor-pointer transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                // Default toggle with a transparent background
                default: "bg-transparent",

                // Toggle with a visible border
                outline:
                    "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
            },

            size: {
                // Default toggle size
                default: "h-9 px-2 min-w-9",

                // Small toggle
                sm: "h-8 px-1.5 min-w-8",

                // Large toggle
                lg: "h-10 px-2.5 min-w-10",
            },
        },

        // Applied when no variant or size is provided
        defaultVariants: {
            size: "default",
            variant: "default",
        },
    },
);

/**
 * A reusable toggle component built on top of Radix UI's Toggle primitive.
 *
 * Supports:
 * - On/off toggle state managed by Radix UI
 * - Multiple visual variants
 * - Multiple sizes
 * - Forwarding refs to the underlying toggle element
 * - Custom styling through `className`
 * - Additional Radix Toggle props through `...props`
 */
const Toggle = forwardRef(
    (
        {
            variant = "default",
            size = "default",
            children,
            className = "",
            ...props
        },
        ref,
    ) => {
        return (
            <TogglePrimitive.Root
                ref={ref}
                className={cn(
                    // Apply the selected variant and size styles
                    toggleVariants({ variant, size }),

                    // Allow consumers to override or extend the default styles
                    className,
                )}
                {...props}>
                {children}
            </TogglePrimitive.Root>
        );
    },
);

Toggle.displayName = "Toggle";

Toggle.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(["default", "outline"]),
    size: PropTypes.oneOf(["default", "sm", "lg"]),
    className: PropTypes.string,
};

export { Toggle };
