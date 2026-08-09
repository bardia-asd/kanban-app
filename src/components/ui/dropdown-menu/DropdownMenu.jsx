import { forwardRef } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import PropTypes from "prop-types";
import { Check, ChevronLeft } from "lucide-react";
import { cn } from "@/utils/utils";

/**
 * Shared styles for interactive dropdown menu items.
 *
 * Used by standard, checkbox, and radio menu items to
 * provide consistent spacing, focus states, and disabled styles.
 */
const itemClasses =
    "relative flex items-center gap-2 text-sm rounded-sm px-2 py-1.5 outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&-svg]:size-4 [&-svg]:shrink-0";

/**
 * Root dropdown menu component.
 *
 * Manages the dropdown menu state and provides context
 * for all dropdown menu subcomponents.
 */
const DropdownMenu = DropdownMenuPrimitive.Root;

/**
 * Element that opens the dropdown menu.
 */
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

/**
 * Renders dropdown menu content in a React portal.
 */
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

/**
 * Groups related menu items together.
 */
const DropdownMenuGroup = DropdownMenuPrimitive.Group;

/**
 * Creates a nested submenu.
 */
const DropdownMenuSub = DropdownMenuPrimitive.Sub;

/**
 * Groups radio menu items so only one can be selected.
 */
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

/**
 * Dropdown menu content container.
 *
 * Renders the menu inside a portal with configurable
 * alignment, offset, and open/close animations.
 */
const DropdownMenuContent = forwardRef(
    (
        { children, sideOffset = 4, align = "start", className = "", ...props },
        ref,
    ) => {
        return (
            <DropdownMenuPortal>
                <DropdownMenuPrimitive.Content
                    ref={ref}
                    className={cn(
                        "z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-32 overflow-y-auto overflow-x-hidden p-1 rounded-md border border-border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out data-[side=top]:animate-slide-up data-[side=bottom]:animate-slide-down data-[side=left]:animate-slide-left data-[side=right]:animate-slide-right origin-(--radix-dropdown-menu-content-transform-origin)",
                        className,
                    )}
                    align={align}
                    sideOffset={sideOffset}
                    {...props}>
                    {children}
                </DropdownMenuPrimitive.Content>
            </DropdownMenuPortal>
        );
    },
);

DropdownMenuContent.displayName = "DropdownMenuContent";

/**
 * Runtime prop validation.
 */
DropdownMenuContent.propTypes = {
    children: PropTypes.node,
    sideOffset: PropTypes.number,
    align: PropTypes.oneOf(["start", "center", "end"]),
    className: PropTypes.string,
};

/**
 * Submenu trigger component.
 *
 * Opens a nested dropdown menu when interacted with.
 */
const DropdownMenuSubTrigger = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <DropdownMenuPrimitive.SubTrigger
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-between gap-2 rounded-sm cursor-default select-none outline-none px-2 py-1.5 text-sm focus:bg-accent data-[state=open]:bg-accent [&-svg]:size-4 [&-svg]:shrink-0 [&-svg]:pointer-events-none",
                    className,
                )}
                {...props}>
                {children}
                <ChevronLeft className="mr-auto size-4" />
            </DropdownMenuPrimitive.SubTrigger>
        );
    },
);

DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

DropdownMenuSubTrigger.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Submenu content container.
 *
 * Displays the content of a nested dropdown menu.
 */
const DropdownMenuSubContent = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <DropdownMenuPrimitive.SubContent
                ref={ref}
                className={cn(
                    "z-50 min-w-32 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out data-[side=right]:data-[state=open]:animate-slide-right data-[side=left]:data-[state=open]:animate-slide-left data-[side=top]:data-[state=open]:animate-slide-up data-[side=bottom]:data-[state=open]:animate-slide-down origin-(--radix-dropdown-menu-content-transform-origin)",
                    className,
                )}
                {...props}>
                {children}
            </DropdownMenuPrimitive.SubContent>
        );
    },
);

DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

DropdownMenuSubContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Standard dropdown menu item.
 *
 * Represents an interactive action within the menu.
 */
const DropdownMenuItem = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <DropdownMenuPrimitive.Item
                ref={ref}
                className={cn(itemClasses, className)}
                {...props}>
                {children}
            </DropdownMenuPrimitive.Item>
        );
    },
);

DropdownMenuItem.displayName = "DropdownMenuItem";

DropdownMenuItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Checkbox menu item.
 *
 * Allows independent on/off selection and displays
 * a check indicator when selected.
 */
const DropdownMenuCheckboxItem = forwardRef(
    ({ children, checked, className = "", ...props }, ref) => {
        return (
            <DropdownMenuPrimitive.CheckboxItem
                ref={ref}
                checked={checked}
                className={cn(itemClasses, className)}
                {...props}>
                {/* Selection indicator */}
                <span className="absolute inset-e-2 flex items-center justify-center size-3.5">
                    <DropdownMenuPrimitive.ItemIndicator>
                        <Check size={16} />
                    </DropdownMenuPrimitive.ItemIndicator>
                </span>
                {children}
            </DropdownMenuPrimitive.CheckboxItem>
        );
    },
);

DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

DropdownMenuCheckboxItem.propTypes = {
    children: PropTypes.node,
    checked: PropTypes.bool,
    className: PropTypes.string,
};

/**
 * Radio menu item.
 *
 * Represents a selectable option within a
 * DropdownMenuRadioGroup.
 */
const DropdownMenuRadioItem = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <DropdownMenuPrimitive.RadioItem
                ref={ref}
                className={cn(itemClasses, className)}
                {...props}>
                {/* Selection indicator */}
                <span className="absolute inset-e-2 flex items-center justify-center size-3.5">
                    <DropdownMenuPrimitive.ItemIndicator>
                        <Check size={16} />
                    </DropdownMenuPrimitive.ItemIndicator>
                </span>
                {children}
            </DropdownMenuPrimitive.RadioItem>
        );
    },
);

DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

DropdownMenuRadioItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Dropdown menu label.
 *
 * Displays a non-interactive heading for
 * a group of related menu items.
 */
const DropdownMenuLabel = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <DropdownMenuPrimitive.Label
                ref={ref}
                className={cn("px-2 py-1.5 text-sm font-semibold", className)}
                {...props}>
                {children}
            </DropdownMenuPrimitive.Label>
        );
    },
);

DropdownMenuLabel.displayName = "DropdownMenuLabel";

DropdownMenuLabel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

/**
 * Dropdown menu separator.
 *
 * Visually separates groups of menu items.
 */
const DropdownMenuSeparator = forwardRef(
    ({ className = "", ...props }, ref) => {
        return (
            <DropdownMenuPrimitive.Separator
                ref={ref}
                className={cn("-mx-1 my-1 h-px bg-muted", className)}
                {...props}
            />
        );
    },
);

DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

DropdownMenuSeparator.propTypes = {
    className: PropTypes.string,
};

/**
 * Keyboard shortcut indicator.
 *
 * Displays shortcut text aligned to the end
 * of a dropdown menu item.
 */
const DropdownMenuShortcut = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(
                    "ms-auto text-xs tracking-widest opacity-60",
                    className,
                )}
                {...props}>
                {children}
            </span>
        );
    },
);

DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

DropdownMenuShortcut.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuPortal,
    DropdownMenuGroup,
    DropdownMenuSub,
    DropdownMenuRadioGroup,
    DropdownMenuContent,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
};
