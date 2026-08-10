import { forwardRef } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import PropTypes from "prop-types";
import { cn } from "@/utils/utils";

/**
 * Root component that manages the state and behavior of the tabs.
 *
 * This is directly based on Radix UI's Tabs.Root primitive.
 */
const Tabs = TabsPrimitive.Root;

/**
 * A reusable container for grouping tab triggers.
 *
 * Supports:
 * - Forwarding refs to the underlying Radix Tabs.List
 * - Custom styling through `className`
 * - Multiple tab triggers through `children`
 * - Additional Radix Tabs.List props through `...props`
 */
const TabsList = forwardRef(({ children, className = "", ...props }, ref) => {
    return (
        <TabsPrimitive.List
            ref={ref}
            className={cn(
                // Base tab list styles
                "inline-flex h-9 items-center justify-center rounded-full bg-muted text-muted-foreground",

                // Allow consumers to override or extend the default styles
                className,
            )}
            {...props}>
            {children}
        </TabsPrimitive.List>
    );
});

TabsList.displayName = "TabsList";

TabsList.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * A button-like control used to switch between tab panels.
 *
 * Supports:
 * - Forwarding refs to the underlying Radix Tabs.Trigger
 * - Active and inactive states handled by Radix UI
 * - Disabled state styling
 * - Custom styling through `className`
 * - Additional Radix Tabs.Trigger props through `...props`
 */
const TabsTrigger = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <TabsPrimitive.Trigger
                ref={ref}
                className={cn(
                    // Base trigger styles
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium",

                    // Interaction and transition styles
                    "cursor-pointer ring-offset-background transition-all",

                    // Focus styles
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",

                    // Disabled state
                    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",

                    // Active tab styles
                    "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",

                    // Allow consumers to override or extend the default styles
                    className,
                )}
                {...props}>
                {children}
            </TabsPrimitive.Trigger>
        );
    },
);

TabsTrigger.displayName = "TabsTrigger";

TabsTrigger.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Content panel associated with a specific tab trigger.
 *
 * The panel is displayed when its corresponding tab is active.
 *
 * Supports:
 * - Forwarding refs to the underlying Radix Tabs.Content
 * - Custom styling through `className`
 * - Additional Radix Tabs.Content props through `...props`
 */
const TabsContent = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <TabsPrimitive.Content
                ref={ref}
                className={cn(
                    // Spacing and base content styles
                    "mt-2 ring-offset-background",

                    // Focus styles for keyboard navigation
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",

                    // Allow consumers to override or extend the default styles
                    className,
                )}
                {...props}>
                {children}
            </TabsPrimitive.Content>
        );
    },
);

TabsContent.displayName = "TabsContent";

TabsContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
