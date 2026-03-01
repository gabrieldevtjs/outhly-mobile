import { ApiResponseTypeDefault } from "../../../common/types/response";
import { api } from "../../../infrastructure/http/axios/interceptor";

import { RegisterDeviceType } from "./types";

const AuthServiceBiometric = {
  registerDevice: {
    queryFn: async (body: RegisterDeviceType) => {
      console.log("chamando");
      const response = await api.post(`biometric/register-device`, body);

      return response.data as any;
    },
  },

  validateTokenBiometric: {
    queryFn: async (body: RegisterDeviceType) => {
      console.log("chamando");
      const response = await api.post(
        `biometric/validate-token-biometric`,
        body,
      );

      return response.data as any;
    },
  },
};

export { AuthServiceBiometric };
