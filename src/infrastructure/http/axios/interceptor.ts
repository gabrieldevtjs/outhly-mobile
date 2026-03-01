import { AxiosError } from "axios";
import { QueueRequests } from "./types";
import { apiAxiosInstance } from "./instance.api";
import { AuthServiceHttp } from "../../../services/auth/http";
import { AuthStorage } from "../../storage/keychan/user";

let queue: QueueRequests[] = [];
let isRefreshing = false;

apiAxiosInstance.registerInterceptTokenManager = (signOut) => {
  const interceptor = apiAxiosInstance.interceptors.response.use(
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
              resolve(apiAxiosInstance(config));
            },
            onFailure: reject,
          });
        });
      }

      isRefreshing = true;

      try {
        const {
          data: { tokens },
        } = await AuthServiceHttp.refresh.queryFn();

        const { newAccessToken, newRefreshToken } = tokens;

        await AuthStorage.save(newAccessToken, newRefreshToken);

        apiAxiosInstance.defaults.headers.common["Authorization"] =
          `Bearer ${newAccessToken}`;

        config.headers = { Authorization: `Bearer ${newAccessToken}` };

        queue.forEach((req) => req.onSuccess(newAccessToken));

        return apiAxiosInstance(config);
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
  return () => apiAxiosInstance.interceptors.response.eject(interceptor);
};

export { apiAxiosInstance };
