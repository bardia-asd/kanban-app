import { create } from "zustand";
import { taskActions } from "./actions/taskActions";

export const useTasksStore = create((set, get) => ({
    tasks: [],
    fetchLoading: false,
    mutationLoading: false,
    error: null,

    ...taskActions(set, get),
}));
