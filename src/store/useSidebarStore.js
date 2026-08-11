import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSidebarStore = create(
    persist(
        (set) => ({
            collapsed: false,
            mobileOpen: false,

            toggleCollapsed: () =>
                set((state) => ({ collapsed: !state.collapsed })),

            setCollapsed: (value) => set({ collapsed: value }),

            toggleMobile: () =>
                set((state) => ({ mobileOpen: !state.mobileOpen })),

            setMobileOpen: (value) => set({ mobileOpen: value }),
        }),
        {
            // Persist only the sidebar's desktop collapsed state
            name: "sidebar-storage",
            partialize: (state) => ({ collapsed: state.collapsed }),
        },
    ),
);
