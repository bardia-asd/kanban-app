import { create } from "zustand";

export const useBoardUIStore = create((set) => ({
    pendingDeleteTaskId: null,
    requestDeleteTask: (id) => set({ pendingDeleteTaskId: id }),
    clearPendingDelete: () => set({ pendingDeleteTaskId: null }),

    searchQuery: "",
    setSearchQuery: (query) => set({ searchQuery: query }),

    priorityFilter: "all",
    setPriorityFilter: (priority) => set({ priorityFilter: priority }),
}));
