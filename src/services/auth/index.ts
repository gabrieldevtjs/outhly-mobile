import { ApiResponseTypeDefault } from "../../common/types/response";
import { api } from "../../infrastructure/http/axios/api";
import {
  CreateUserFormType,
  LoginUserFormType,
  RegisterResponse,
  TokensResponseType,
} from "./types";

const path = "register";

const AuthService = {
  register: {
    queryFn: async (body: CreateUserFormType) => {
      const response = await api.post(`${path}`, body);

      return response.data as RegisterResponse;
    },
  },

  signIn: {
    queryFn: async (body: LoginUserFormType) => {
      const response = await api.post(`login`, body);

      return response.data as RegisterResponse;
    },
  },

  refresh: {
    queryFn: async () => {
      const response = await api.post(`refresh`);

      return response.data as ApiResponseTypeDefault<TokensResponseType>;
    },
  },
};

export { AuthService };
