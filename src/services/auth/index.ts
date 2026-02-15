import { api } from "../../infrastructure/http/axios/api";
import { CreateUserFormType, LoginUserFormType, ResponseTokens } from "./types";

const path = "register";

const AuthService = {
  register: {
    queryFn: async (body: CreateUserFormType) => {
      const response = await api.post(`${path}`, body);

			console.log(JSON.stringify(response.data, null, 2 ))
      return response.data as any;
    },
  },

  signIn: {
    queryFn: async (body: LoginUserFormType) => {
      const response = await api.post(`${path}`, {
        body: body,
      });

      return response.data as any;
    },
  },

  refresh: {
    queryFn: async () => {
      const response = await api.post(`${path}`);

      return response.data as ResponseTokens;
    },
  },
};

export { AuthService };
