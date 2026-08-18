import { create } from "zustand";
import { addColumn, getColumns } from "../services/columnService";

export const useBoardStore = create((set) => ({
    columns: [],
    fetchLoading: false,
    mutationLoading: false,
    error: null,

    fetchColumns: async () => {
        set({ fetchLoading: true, error: null });

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

    createColumn: async () => {
        set({
            mutationLoading: true,
            error: null,
        });

        try {
            const data = await addColumn();

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
}));
