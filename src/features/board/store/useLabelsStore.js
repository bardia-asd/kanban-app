import { create } from "zustand";
import { fetchLabels } from "../services/labelService";

export const useLabelsStore = create((set) => ({
    labels: [],
    loading: false,
    error: null,

    fetchLabels: async () => {
        set({ loading: true, error: null });

        try {
            const labels = await fetchLabels();

            set({
                labels,
                loading: false,
            });
        } catch (error) {
            set({
                error,
                loading: false,
            });
        }
    },
}));
