import { create } from "zustand";
import { addMember, getMembers } from "../services/membersService";

export const useMemberStore = create((set) => ({
    members: [],
    fetchLoading: false,
    mutationLoading: false,
    error: null,

    // Fetch all members from the database
    fetchMembers: async () => {
        set({
            fetchLoading: true,
            error: null,
        });

        try {
            const data = await getMembers();

            set({
                members: data,
                fetchLoading: false,
            });
        } catch (error) {
            set({
                error: error.message,
                fetchLoading: false,
            });
        }
    },

    // Create a new member and add it to the local store
    createMember: async (member) => {
        set({
            mutationLoading: true,
            error: null,
        });

        try {
            const newMember = await addMember(member);

            set((state) => ({
                members: [...state.members, newMember],
                mutationLoading: false,
            }));

            return {
                success: true,
                newMember,
            };
        } catch (error) {
            set({
                error: error.message,
                mutationLoading: false,
            });

            return {
                success: false,
                error: error.message,
            };
        }
    },
}));
