import { forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import PropTypes from "prop-types";
import { cn } from "@/utils/utils";
import { X } from "lucide-react";

/**
 * Root dialog component.
 *
 * Manages the dialog state and provides context
 * for all dialog subcomponents.
 */
const Dialog = DialogPrimitive.Root;

/**
 * Element that opens the dialog.
 */
const DialogTrigger = DialogPrimitive.Trigger;

/**
 * Element that closes the dialog.
 */
const DialogClose = DialogPrimitive.Close;

/**
 * Renders dialog content in a React portal.
 */
const DialogPortal = DialogPrimitive.Portal;

/**
 * Dialog backdrop.
 *
 * Covers the viewport and provides a dimmed
 * background with open and close animations.
 */
const DialogOverlay = forwardRef(({ className = "", ...props }, ref) => {
    return (
        <DialogPrimitive.Overlay
            ref={ref}
            className={cn(
                "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
                className,
            )}
            {...props}
        />
    );
});

DialogOverlay.displayName = "DialogOverlay";

/**
 * Runtime prop validation.
 */
DialogOverlay.propTypes = {
    className: PropTypes.string,
};

/**
 * Dialog content container.
 *
 * Displays the dialog panel centered within the viewport
 * and includes a built-in close button.
 */
const DialogContent = forwardRef(
    ({ children, showCloseButton = true, className = "", ...props }, ref) => {
        return (
            <DialogPortal>
                <DialogOverlay />

                <DialogPrimitive.Content
                    ref={ref}
                    className={cn(
                        "fixed z-51 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-lg bg-background p-6 border border-border rounded-lg text-foreground shadow-lg data-[state=open]:animate-fade-in data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out data-[state=closed]:animate-fade-out",
                        className,
                    )}
                    {...props}>
                    {children}

                    {/* Default close button */}
                    {showCloseButton && (
                        <DialogPrimitive.Close className="absolute inset-e-4 top-4 rounded-sm text-muted-foreground flex items-center justify-center size-8 hover:text-popover-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer">
                            <X size={16} />
                            <span className="sr-only">Close</span>
                        </DialogPrimitive.Close>
                    )}
                </DialogPrimitive.Content>
            </DialogPortal>
        );
    },
);

DialogContent.displayName = "DialogContent";

/**
 * Runtime prop validation.
 */
DialogContent.propTypes = {
    children: PropTypes.node,
    showCloseButton: PropTypes.bool,
    className: PropTypes.string,
};

/**
 * Dialog header container.
 *
 * Groups the title and description with
 * consistent spacing and alignment.
 */
const DialogHeader = forwardRef(
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

DialogHeader.displayName = "DialogHeader";

/**
 * Runtime prop validation.
 */
DialogHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Dialog footer container.
 *
 * Intended for action buttons such as
 * Confirm and Cancel.
 */
const DialogFooter = forwardRef(
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

DialogFooter.displayName = "DialogFooter";

/**
 * Runtime prop validation.
 */
DialogFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Dialog title component.
 *
 * Represents the primary heading of the dialog.
 */
const DialogTitle = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <DialogPrimitive.Title
                ref={ref}
                className={cn(
                    "text-lg font-semibold leading-none tracking-tight",
                    className,
                )}
                {...props}>
                {children}
            </DialogPrimitive.Title>
        );
    },
);

DialogTitle.displayName = "DialogTitle";

/**
 * Runtime prop validation.
 */
DialogTitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Dialog description component.
 *
 * Displays supporting text below the dialog title.
 */
const DialogDescription = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <DialogPrimitive.Description
                ref={ref}
                className={cn("text-sm text-muted-foreground", className)}
                {...props}>
                {children}
            </DialogPrimitive.Description>
        );
    },
);

DialogDescription.displayName = "DialogDescription";

/**
 * Runtime prop validation.
 */
DialogDescription.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export {
    Dialog,
    DialogTrigger,
    DialogClose,
    DialogPortal,
    DialogOverlay,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
};
