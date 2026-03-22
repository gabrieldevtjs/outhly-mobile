import Reactotron from "reactotron-react-native";
import reactotronZustand from "reactotron-plugin-zustand";
import { useAuthStore } from "../../../common/stores/auth";
import api from "@api/api";

let monitorRegistered = false;

if (__DEV__) {
  const tron = Reactotron.configure({ name: "Autly" })
    .useReactNative({
      networking: false,
      errors: true,
      log: true,
    })
    .use(reactotronZustand({ stores: [{ name: "auth", store: useAuthStore }] }))
    .connect();

  if (!monitorRegistered) {
    monitorRegistered = true;
    api.addMonitor((response) => {
      if (response.config) {
        tron.apiResponse?.(
          response.config as any,
          {
            body: response.data,
            headers: response.headers as any,
            status: response.status ?? 0,
          },
          response.duration ?? 0,
        );
      }
    });
  }
}
