const formatNumberFa = (value) => new Intl.NumberFormat("fa-IR").format(value);

const formatDateShort = (date) => {
    const d = date instanceof Date ? date : new Date(date);
    return new Intl.DateTimeFormat("fa-IR", {
        month: "short",
        day: "numeric",
    }).format(d);
};

export { formatNumberFa, formatDateShort };
