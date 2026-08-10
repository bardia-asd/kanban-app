import { forwardRef } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import PropTypes from "prop-types";
import { cn } from "@/utils/utils";

/**
 * Tooltip provider.
 *
 * Wraps one or more tooltips and manages
 * shared behavior such as delay duration.
 */
const TooltipProvider = TooltipPrimitive.Provider;

/**
 * Root tooltip component.
 *
 * Manages the tooltip state and provides
 * context for all tooltip subcomponents.
 */
const Tooltip = TooltipPrimitive.Root;

/**
 * Element that triggers the tooltip.
 */
const TooltipTrigger = TooltipPrimitive.Trigger;

/**
 * Tooltip content component.
 *
 * Renders the tooltip inside a portal with
 * configurable positioning and animated transitions.
 */
const TooltipContent = forwardRef(
    ({ children, sideOffset = 4, className = "", ...props }, ref) => {
        return (
            <TooltipPrimitive.Portal>
                <TooltipPrimitive.Content
                    ref={ref}
                    sideOffset={sideOffset}
                    className={cn(
                        "z-50 max-w-xs rounded-md border border-border bg-popover text-xs text-popover-foreground px-3 py-1.5 shadow-lg outline-none data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out origin-[--radix-tooltip-content-transform-origin]",
                        className,
                    )}
                    {...props}>
                    {children}
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Portal>
        );
    },
);

TooltipContent.displayName = "TooltipContent";

/**
 * Runtime prop validation.
 */
TooltipContent.propTypes = {
    children: PropTypes.node,
    sideOffset: PropTypes.number,
    className: PropTypes.string,
};

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
