import { create } from "zustand";
import { AuthStore } from "./types";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      setUser: (user) => set({ user }),
      setLoading: (isLoading) => set({ isLoading }),
      signOut: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ user: state.user }),
    },
  ),
);

export { useAuthStore };
