import { useEffect } from "react";
import PageHeader from "@/components/layout/PageHeader";
import TaskCard from "@/features/board/components/tasks/TaskCard";
import DeleteTaskAlertDialog from "@/features/board/components/tasks/DeleteTaskAlertDialog";
import UpdateTaskDrawer from "@/features/board/components/tasks/UpdateTaskDrawer";
import { useTasksStore } from "@/features/board/store/useTasksStore";
import { formatNumberFa } from "@/utils/formatter";

const Tasks = () => {
    const tasks = useTasksStore((s) => s.tasks);
    const fetchTasks = useTasksStore((s) => s.fetchTasks);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <>
            <PageHeader
                title="وظایف من"
                description={`${formatNumberFa(tasks.length)} وظیفه در جریان`}
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {tasks.map((t) => (
                    <TaskCard key={t.id} task={t} />
                ))}
            </div>

            <DeleteTaskAlertDialog />

            <UpdateTaskDrawer />
        </>
    );
};

export default Tasks;
