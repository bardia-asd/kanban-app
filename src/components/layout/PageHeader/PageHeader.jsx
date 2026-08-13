import PropTypes from "prop-types";

const PageHeader = ({ title, description, actions }) => {
    return (
        <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="min-w-0">
                <h1 className="truncate text-2xl font-bold tracking-tight md:text-3xl">
                    {title}
                </h1>

                {/* Render the description only when provided */}
                {description && (
                    <p className="mt-1 truncate text-sm text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>

            {/* Render optional action buttons or controls */}
            {actions && (
                <div className="flex items-center gap-3">{actions}</div>
            )}
        </div>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    actions: PropTypes.node,
};

export default PageHeader;
