import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs) => {
    return twMerge(clsx(...inputs));
};

const getInitials = (name) => {
    return name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word[0])
        .join("");
};

export { cn, getInitials };
