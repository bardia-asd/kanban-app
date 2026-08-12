import { create } from "zustand";
import { persist } from "zustand/middleware";
import { themeData } from "@/data/themeData";

export const useThemeStore = create(
    persist(
        (set) => ({
            theme: "crimson",

            applyTheme: (themeId) => {
                // Find the selected theme configuration
                const config = themeData.find((theme) => theme.id === themeId);
                if (!config) return;

                // Apply the theme to the document root
                document.documentElement.dataset.theme = config.id;
                document.documentElement.classList.toggle(
                    "dark",
                    config.mode === "dark",
                );

                set({ theme: config.id });
            },
        }),
        {
            // Persist the selected theme across sessions
            name: "theme-storage",
            onRehydrateStorage: () => (state) => {
                if (state) state.applyTheme(state.theme);
            },
        },
    ),
);
