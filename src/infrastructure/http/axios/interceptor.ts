import { AxiosError } from "axios";
import { QueueItem } from "./types";
import { api } from "./api";
import { AuthService } from "../../../services/auth";

let queue: QueueItem[] = [];
let isRefreshing = false;

api.registerInterceptTokenManager = (signOut) => {
  const interceptor = api.interceptors.response.use(
    (response) => response,

    async (error) => {
      if (error.response?.status !== 401) {
        return Promise.reject(error);
      }

      const refresh_token = "seu_refresh_token_aqui";

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
        const { access_token, refresh_token: new_refresh } =
          await AuthService.refresh.queryFn();

        api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
        config.headers = { Authorization: `Bearer ${access_token}` };

        queue.forEach((req) => req.onSuccess(access_token));

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
