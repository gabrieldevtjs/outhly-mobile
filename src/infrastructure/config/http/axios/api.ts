import { create } from "apisauce";
import { apiAxiosInstance } from "./interceptor";

const api = create({
  axiosInstance: apiAxiosInstance,
  baseURL: apiAxiosInstance.defaults.baseURL,
});

export default api;
