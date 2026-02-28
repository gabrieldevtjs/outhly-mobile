import { ApiResponseTypeDefault } from "../../../common/types/response";
import { api } from "../../../infrastructure/http/axios/api";
import {

  RegisterDeviceType,

} from "./types";


const AuthServiceBiometric = {
  registerDevice: {
    queryFn: async (body: RegisterDeviceType) => {
      const response = await api.post(`register-device`, body);

      return response.data as any;
    },
  },

  validateTokenBiometric: {
    queryFn: async (body: RegisterDeviceType) => {
      const response = await api.post(`validate-token-biometric`, body);

      return response.data as any;
    },
  },
};

export { AuthServiceBiometric };
