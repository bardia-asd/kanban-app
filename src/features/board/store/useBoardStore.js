import { create } from "zustand";
import { getColumns } from "../services/columnService";

export const useBoardStore = create((set) => ({
    columns: [],
    isLoading: false,
    error: null,

    fetchColumns: async () => {
        set({ isLoading: true, error: null });

        try {
            const data = await getColumns();

            set({ columns: data, isLoading: false });
        } catch (err) {
            set({ error: err.message, isLoading: false });
        }
    },

    
}));
