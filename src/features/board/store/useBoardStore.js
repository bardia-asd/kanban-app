import { create } from "zustand";
import { columnActions } from "./actions/columnActions";

export const useBoardStore = create((set) => ({
    columns: [],
    fetchLoading: false,
    mutationLoading: false,
    error: null,

    ...columnActions(set),
}));
