import { create } from "zustand";

const userStore = create((set) => ({
  user: null,
  isLoading: false,
  isAfterLogin: false,

  signIn: async (cpf: string, password: string) => {
		set({ isLoading: true, isAfterLogin: true });
		
		// try {
		// 	const response = await 
		// }
  },
}));
