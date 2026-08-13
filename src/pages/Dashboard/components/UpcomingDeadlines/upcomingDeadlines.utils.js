export const getPriority = (priority) => {
    switch (priority) {
        case "low":
            return "var(--info)";
        case "medium":
            return "var(--warning)";
        case "high":
            return "var(--destructive)";
        default:
            return "var(--info)";
    }
};
