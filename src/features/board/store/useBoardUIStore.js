import { create } from "zustand";

export const useBoardUIStore = create((set) => ({
    // Task deletion state.
    deletingTaskId: null,
    openDeleteTask: (id) => set({ deletingTaskId: id }),
    closeDeleteTask: () => set({ deletingTaskId: null }),

    // Task editing state.
    editingTaskId: null,
    openEditTask: (id) => set({ editingTaskId: id }),
    closeEditTask: () => set({ editingTaskId: null }),

    // Board search state.
    searchQuery: "",
    setSearchQuery: (query) => set({ searchQuery: query }),

    // Board priority filter state.
    priorityFilter: "all",
    setPriorityFilter: (priority) => set({ priorityFilter: priority }),
}));
