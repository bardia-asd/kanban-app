import {
    addTask,
    deleteTask,
    getTasks,
    updateTaskPosition,
    updateTask,
} from "@/features/board/services/tasksService";
import {
    setTaskAssignees,
    setTaskLabels,
} from "@/features/board/services/taskRelationsService";

// Task-related actions for fetching and managing tasks
export const taskActions = (set, get) => ({
    // Fetch all tasks
    fetchTasks: async () => {
        set({
            fetchLoading: true,
            error: null,
        });

        try {
            const data = await getTasks();

            set({
                tasks: data,
                fetchLoading: false,
            });
        } catch (err) {
            set({
                error: err.message,
                fetchLoading: false,
            });
        }
    },

    // Create a new task
    createTask: async (task) => {
        set({
            mutationLoading: true,
            error: null,
        });

        try {
            const data = await addTask(task);

            set((state) => ({
                tasks: [...state.tasks, data],
                mutationLoading: false,
            }));

            return {
                success: true,
                data,
            };
        } catch (err) {
            set({
                error: err.message,
                mutationLoading: false,
            });

            return {
                success: false,
                error: err.message,
            };
        }
    },

    // Update an existing task
    editTask: async (id, updates) => {
        set({
            mutationLoading: true,
            error: null,
        });

        try {
            const { task_labels, task_assignees, ...taskFields } = updates;

            await Promise.all([
                task_labels !== undefined
                    ? setTaskLabels(id, task_labels)
                    : Promise.resolve(),
                task_assignees !== undefined
                    ? setTaskAssignees(id, task_assignees)
                    : Promise.resolve(),
            ]);

            const data = await updateTask(id, taskFields);

            set((state) => ({
                tasks: state.tasks.map((task) =>
                    task.id === id ? data : task,
                ),
                mutationLoading: false,
            }));

            return {
                success: true,
                data,
            };
        } catch (err) {
            set({
                error: err.message,
                mutationLoading: false,
            });

            return {
                success: false,
                error: err.message,
            };
        }
    },

    // Move a task to another column and update its position
    moveTask: async (id, { newColumnId, newPosition }) => {
        try {
            await updateTaskPosition(id, {
                column_id: newColumnId,
                position: newPosition,
            });

            return {
                success: true,
            };
        } catch (err) {
            set({
                error: err.message,
            });

            return {
                success: false,
                error: err.message,
            };
        }
    },

    // Delete a task and remove it from the local state
    removeTask: async (id) => {
        set({
            mutationLoading: true,
            error: null,
        });

        try {
            await deleteTask(id);

            set((state) => ({
                tasks: state.tasks.filter((task) => task.id !== id),
                mutationLoading: false,
            }));

            return {
                success: true,
            };
        } catch (err) {
            set({
                error: err.message,
                mutationLoading: false,
            });

            return {
                success: false,
                error: err.message,
            };
        }
    },

    // Get tasks belonging to a specific column
    getTasksByColumn: (columnId) =>
        get()
            .tasks.filter((task) => task.column_id === columnId)
            .sort((a, b) => a.position - b.position),
});
