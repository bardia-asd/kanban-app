import PropTypes from "prop-types";
import { cn } from "@/utils/utils";

const Field = ({ children, className = "" }) => {
    return (
        <div
            // Merge default layout styles with custom classes.
            className={cn("flex flex-col gap-2", className)}>
            {children}
        </div>
    );
};

Field.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export { Field };
