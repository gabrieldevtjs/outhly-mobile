import axios from "axios";
import { ApiInstance } from "./types";

const ENVIRONMENTS = {
  DEV: process.env.EXPO_PUBLIC_API_AUTLY_DEV,
  LOCAL: process.env.EXPO_PUBLIC_API_AUTLY_LOCAL,
} as const;

const getCurrentEnv = () => {
  const env = process.env.EXPO_PUBLIC_ENVIRONMENT as keyof typeof ENVIRONMENTS;

  return ENVIRONMENTS[env] ?? ENVIRONMENTS.LOCAL;
};

export const createInstanceApi = () => {
  const baseURL = getCurrentEnv();

  if (!baseURL) {
    throw new Error("BaseURL não definida. Verifique as envs do Expo.");
  }

  return axios.create({
    baseURL,
    timeout: 10000,
  });
};

const apiAxiosInstance = createInstanceApi() as ApiInstance;

export { apiAxiosInstance };
