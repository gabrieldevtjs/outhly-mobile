import { AxiosError } from "axios";
import { QueueItem } from "./types";
import { api } from "./api";
import { AuthService } from "../../../services/auth";
import { AuthStorage } from "../../storage/secure";

let queue: QueueItem[] = [];
let isRefreshing = false;

api.registerInterceptTokenManager = (signOut) => {
  const interceptor = api.interceptors.response.use(
    (response) => response,

    async (error) => {
      if (error.response?.status !== 401) {
        return Promise.reject(error);
      }

      const refresh_token = await AuthStorage.getRefreshToken();

      if (!refresh_token) {
        signOut();
        return Promise.reject(error);
      }

      const config = error.config;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          queue.push({
            onSuccess: (token) => {
              config.headers = { Authorization: `Bearer ${token}` };
              resolve(api(config));
            },
            onFailure: reject,
          });
        });
      }

      isRefreshing = true;

      try {
        const {
          data: { tokens },
        } = await AuthService.refresh.queryFn();

        const { newAccessToken, newRefreshToken } = tokens;

        await AuthStorage.save(newAccessToken, newRefreshToken);

        api.defaults.headers.common["Authorization"] =
          `Bearer ${newAccessToken}`;
        config.headers = { Authorization: `Bearer ${newAccessToken}` };

        queue.forEach((req) => req.onSuccess(newAccessToken));

        return api(config);
      } catch (err) {
        queue.forEach((req) => req.onFailure(err as AxiosError));
        signOut();
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
        queue = [];
      }
    },
  );
  return () => api.interceptors.response.eject(interceptor);
};

export { api };
