import { create } from "apisauce";
import { apiAxiosInstance } from "./instance.api";

const api = create({
  axiosInstance: apiAxiosInstance,
  baseURL: apiAxiosInstance.defaults.baseURL,
});

export default api;
