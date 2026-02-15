import * as SecureStore from "expo-secure-store";
import { REFRESH_KEY, TOKEN_KEY } from "./keys";

export const AuthStorage = {
  save: async (access: string, refresh: string) => {
    await SecureStore.setItemAsync(TOKEN_KEY, access);
    await SecureStore.setItemAsync(REFRESH_KEY, refresh);
  },

  get: async () => ({
    access_token: await SecureStore.getItemAsync(TOKEN_KEY),
    refresh_token: await SecureStore.getItemAsync(REFRESH_KEY),
  }),

  clear: async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    await SecureStore.deleteItemAsync(REFRESH_KEY);
  },
};
