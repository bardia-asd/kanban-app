import { forwardRef } from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import PropTypes from "prop-types";
import { cn } from "@/utils/utils";
import { buttonVariants } from "../button/Button";

/**
 * Root alert dialog component.
 *
 * Manages the alert dialog state and provides context
 * for all alert dialog subcomponents.
 */
const AlertDialog = AlertDialogPrimitive.Root;

/**
 * Element that opens the alert dialog.
 */
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

/**
 * Renders alert dialog content in a React portal.
 */
const AlertDialogPortal = AlertDialogPrimitive.Portal;

/**
 * Alert dialog backdrop.
 *
 * Covers the viewport and provides a dimmed
 * background with open and close animations.
 */
const AlertDialogOverlay = forwardRef(({ className = "", ...props }, ref) => {
    return (
        <AlertDialogPrimitive.Overlay
            ref={ref}
            className={cn(
                "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
                className,
            )}
            {...props}
        />
    );
});

AlertDialogOverlay.displayName = "AlertDialogOverlay";

/**
 * Runtime prop validation.
 */
AlertDialogOverlay.propTypes = {
    className: PropTypes.string,
};

/**
 * Alert dialog content container.
 *
 * Displays the confirmation dialog centered within
 * the viewport using a portal.
 */
const AlertDialogContent = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <AlertDialogPortal>
                <AlertDialogOverlay />

                <AlertDialogPrimitive.Content
                    ref={ref}
                    className={cn(
                        "fixed z-51 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-lg bg-background p-6 border border-border rounded-lg text-foreground shadow-lg data-[state=open]:animate-fade-in data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out data-[state=closed]:animate-fade-out",
                        className,
                    )}
                    {...props}>
                    {children}
                </AlertDialogPrimitive.Content>
            </AlertDialogPortal>
        );
    },
);

AlertDialogContent.displayName = "AlertDialogContent";

/**
 * Runtime prop validation.
 */
AlertDialogContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Alert dialog header container.
 *
 * Groups the title and description with
 * consistent spacing and alignment.
 */
const AlertDialogHeader = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex flex-col gap-1.5 text-center sm:text-start",
                    className,
                )}
                {...props}>
                {children}
            </div>
        );
    },
);

AlertDialogHeader.displayName = "AlertDialogHeader";

/**
 * Runtime prop validation.
 */
AlertDialogHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Alert dialog footer container.
 *
 * Intended for confirmation and cancel actions.
 */
const AlertDialogFooter = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex flex-col sm:flex-row sm:justify-end gap-2",
                    className,
                )}
                {...props}>
                {children}
            </div>
        );
    },
);

AlertDialogFooter.displayName = "AlertDialogFooter";

/**
 * Runtime prop validation.
 */
AlertDialogFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Alert dialog title component.
 *
 * Represents the primary heading of the alert dialog.
 */
const AlertDialogTitle = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <AlertDialogPrimitive.Title
                ref={ref}
                className={cn(
                    "text-lg font-semibold leading-none tracking-tight",
                    className,
                )}
                {...props}>
                {children}
            </AlertDialogPrimitive.Title>
        );
    },
);

AlertDialogTitle.displayName = "AlertDialogTitle";

/**
 * Runtime prop validation.
 */
AlertDialogTitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Alert dialog description component.
 *
 * Displays supporting text beneath the alert dialog title.
 */
const AlertDialogDescription = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <AlertDialogPrimitive.Description
                ref={ref}
                className={cn("text-sm text-muted-foreground", className)}
                {...props}>
                {children}
            </AlertDialogPrimitive.Description>
        );
    },
);

AlertDialogDescription.displayName = "AlertDialogDescription";

/**
 * Runtime prop validation.
 */
AlertDialogDescription.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Alert dialog confirm action.
 *
 * Wraps the shared Button component while preserving
 * Radix AlertDialog behavior through the `asChild` prop.
 */
const AlertDialogAction = forwardRef(
    ({ children, className = "", ...props }, ref) => (
        <AlertDialogPrimitive.Action
            ref={ref}
            className={cn(
                buttonVariants({ variant: "destructive" }),
                className,
            )}
            {...props}>
            {children}
        </AlertDialogPrimitive.Action>
    ),
);

AlertDialogAction.displayName = "AlertDialogAction";

/**
 * Runtime prop validation.
 */
AlertDialogAction.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Alert dialog cancel action.
 *
 * Wraps the shared Button component while preserving
 * Radix AlertDialog behavior through the `asChild` prop.
 */
const AlertDialogCancel = forwardRef(
    ({ children, className = "", ...props }, ref) => (
        <AlertDialogPrimitive.Cancel
            ref={ref}
            className={cn(buttonVariants({ variant: "outline" }), className)}
            {...props}>
            {children}
        </AlertDialogPrimitive.Cancel>
    ),
);

AlertDialogCancel.displayName = "AlertDialogCancel";

/**
 * Runtime prop validation.
 */
AlertDialogCancel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogPortal,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
};
