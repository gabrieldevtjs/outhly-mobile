import axios from "axios";
import { ApiInstance } from "./types";

const ENVIRONMENTS = {
  DEV: process.env.EXPO_PUBLIC_API_GAS_FACIL_DEV,
  LOCAL: process.env.EXPO_PUBLIC_API_GAS_FACIL_LOCAL,
  PROD: process.env.EXPO_PUBLIC_API_GAS_FACIL_PROD,
} as const;

const getCurrentEnv = () => {
  const env = process.env.EXPO_PUBLIC_ENVIRONMENT as keyof typeof ENVIRONMENTS;

  return ENVIRONMENTS[env] ?? ENVIRONMENTS.LOCAL;
};

export const createApi = () => {
  const baseURL = getCurrentEnv();

  if (!baseURL) {
    throw new Error("BaseURL não definida. Verifique as envs do Expo.");
  }

  return axios.create({
    baseURL,
    timeout: 10000,
  });
};

const api = createApi() as ApiInstance;

export { api };
