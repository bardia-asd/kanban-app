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

    moveTaskLocal: ({ sourceId, targetColumnId, targetIndex }) => {
        set((state) => {
            const columns = {};

            for (const task of state.tasks) {
                if (!columns[task.column_id]) {
                    columns[task.column_id] = [];
                }

                columns[task.column_id].push(task);
            }

            Object.values(columns).forEach((columnTasks) => {
                columnTasks.sort((a, b) => a.position - b.position);
            });

            const sourceTask = state.tasks.find((task) => task.id === sourceId);

            if (!sourceTask) {
                return state;
            }

            const sourceColumnId = sourceTask.column_id;

            const sourceItems = columns[sourceColumnId] ?? [];
            const targetItems = columns[targetColumnId] ?? [];

            const sourceIndex = sourceItems.findIndex(
                (task) => task.id === sourceId,
            );

            if (sourceIndex === -1) {
                return state;
            }

            const [movedTask] = sourceItems.splice(sourceIndex, 1);

            let index = targetIndex;

            if (sourceColumnId === targetColumnId) {
                if (sourceIndex < index) {
                    index -= 1;
                }
            }

            index = Math.max(0, Math.min(index, targetItems.length));

            movedTask.column_id = targetColumnId;

            targetItems.splice(index, 0, movedTask);

            columns[sourceColumnId] = sourceItems;
            columns[targetColumnId] = targetItems;

            const updatedTasks = Object.values(columns)
                .flat()
                .map((task) => ({
                    ...task,
                    position: columns[task.column_id].findIndex(
                        (item) => item.id === task.id,
                    ),
                }));

            return {
                tasks: updatedTasks,
            };
        });
    },

    persistTaskOrder: async (tasks) => {
        try {
            for (const task of tasks) {
                await updateTaskPosition(task.id, {
                    column_id: task.column_id,
                    position: task.position,
                });
            }

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
