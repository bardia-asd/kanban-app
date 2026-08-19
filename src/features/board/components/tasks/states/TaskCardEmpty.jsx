const TaskCardEmpty = () => {
    return (
        <div className="flex min-h-24 items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 px-4 py-6">
            <p className="text-sm text-muted-foreground">وظیفه‌ای وجود ندارد</p>
        </div>
    );
};

export default TaskCardEmpty;
