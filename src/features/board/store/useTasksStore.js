import { create } from "zustand";
import { taskActions } from "./actions/taskActions";

export const useTasksStore = create((set, get) => ({
    tasks: [],
    pendingDeleteTaskId: null,
    requestDeleteTask: (id) => set({ pendingDeleteTaskId: id }),
    clearPendingDelete: () => set({ pendingDeleteTaskId: null }),

    fetchLoading: false,
    mutationLoading: false,
    error: null,

    ...taskActions(set, get),
}));
