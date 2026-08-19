import {
    addColumn,
    deleteColumn,
    getColumns,
    updateColumn,
} from "@/features/board/services/columnService";

export const columnActions = (set) => ({
    // Fetch all board columns
    fetchColumns: async () => {
        set({
            fetchLoading: true,
            error: null,
        });

        try {
            const data = await getColumns();

            set({
                columns: data,
                fetchLoading: false,
            });
        } catch (err) {
            set({
                error: err.message,
                fetchLoading: false,
            });
        }
    },

    // Create a new board column
    createColumn: async (column) => {
        set({
            mutationLoading: true,
            error: null,
        });

        try {
            const data = await addColumn(column);

            set((state) => ({
                columns: [...state.columns, data],
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

    // Rename an existing column
    renameColumn: async (id, title) => {
        set({
            mutationLoading: true,
            error: null,
        });

        try {
            const data = await updateColumn(id, { title });

            set((state) => ({
                columns: state.columns.map((column) =>
                    column.id === id ? data : column,
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

    // Delete a column and remove it from the local state
    deleteColumn: async (id) => {
        set({
            mutationLoading: true,
            error: null,
        });

        try {
            await deleteColumn(id);

            set((state) => ({
                columns: state.columns.filter((column) => column.id !== id),
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
});
