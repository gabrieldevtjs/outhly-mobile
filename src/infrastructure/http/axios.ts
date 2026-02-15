// import axios, { AxiosError, AxiosInstance } from "axios";

// type SignOut = () => void;

// type ApiInstance = AxiosInstance & {
//   registerInterceptTokenManager: (signOut: SignOut) => () => void;
// };

// type QueueItem = {
//   onSuccess: (token: string) => void;
//   onFailure: (error: AxiosError) => void;
// };

// const api = axios.create({
//   baseURL: "https://sua-api.com",
//   timeout: 10000,
// }) as ApiInstance;

// let queue: QueueItem[] = [];
// let isRefreshing = false;

// api.registerInterceptTokenManager = (signOut) => {
//   const interceptor = api.interceptors.response.use(
//     (response) => response,

//     async (error) => {
//       if (error.response?.status !== 401) {
//         return Promise.reject(error);
//       }

//       const refresh_token = "seu_refresh_token_aqui";

//       if (!refresh_token) {
//         signOut();
//         return Promise.reject(error);
//       }

//       const config = error.config;

//       if (isRefreshing) {
//         return new Promise((resolve, reject) => {
//           queue.push({
//             onSuccess: (token) => {
//               config.headers = { Authorization: `Bearer ${token}` };
//               resolve(api(config));
//             },
//             onFailure: reject,
//           });
//         });
//       }

//       isRefreshing = true;

//       try {
//         const { access_token, refresh_token: new_refresh } =
//           await refreshTokenAPI(refresh_token);

//         api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
//         config.headers = { Authorization: `Bearer ${access_token}` };

//         queue.forEach((req) => req.onSuccess(access_token));

//         return api(config);
//       } catch (err) {
//         queue.forEach((req) => req.onFailure(err as AxiosError));
//         signOut();
//         return Promise.reject(err);
//       } finally {
//         isRefreshing = false;
//         queue = [];
//       }
//     },
//   );
//   return () => api.interceptors.response.eject(interceptor);
// };

// export { api };
