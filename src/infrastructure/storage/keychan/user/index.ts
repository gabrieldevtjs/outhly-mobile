import * as SecureStore from "expo-secure-store";
import { REFRESH_KEY, TOKEN_KEY } from "./keys";
import { TokensSecureType } from "./types";

const AuthStorage = {
  save: async (access: string, refresh: string): Promise<void> => {
    await SecureStore.setItemAsync(TOKEN_KEY, access);
    await SecureStore.setItemAsync(REFRESH_KEY, refresh);
  },

  getAll: async (): Promise<TokensSecureType> => ({
    access_token: await SecureStore.getItemAsync(TOKEN_KEY),
    refresh_token: await SecureStore.getItemAsync(REFRESH_KEY),
  }),

  getAccessToken: async (): Promise<string | null> =>
    SecureStore.getItemAsync(TOKEN_KEY),

  getRefreshToken: async (): Promise<string | null> =>
    SecureStore.getItemAsync(REFRESH_KEY),

  clear: async (): Promise<void> => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    await SecureStore.deleteItemAsync(REFRESH_KEY);
  },
};

export { AuthStorage };
