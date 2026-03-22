import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeStore } from "./types";

const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      mode: "dark",
      toggleTheme: () =>
        set({ mode: get().mode === "dark" ? "light" : "dark" }),
      setTheme: (mode) => set({ mode }),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ mode: state.mode }),
    },
  ),
);

export { useThemeStore };
