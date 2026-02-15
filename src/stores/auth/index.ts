import { create } from "zustand";
import { AuthStore } from "./types";

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
  signOut: () => set({ user: null }),
}));

export { useAuthStore }