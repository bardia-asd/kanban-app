import { forwardRef } from "react";
import PropTypes from "prop-types";
import { cn } from "@/utils/utils";

const Label = forwardRef(({ children, className = "", ...props }, ref) => {
    return (
        <label
            ref={ref}
            className={cn(
                "text-xs text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                className,
            )}
            {...props}>
            {children}
        </label>
    );
});

Label.displayName = "Label";

Label.propTypes = {};

export { Label };
