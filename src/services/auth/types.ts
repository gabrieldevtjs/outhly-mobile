export type CreateUserFormType = {
  name: string;
  email: string;
  password: string;
};

export type LoginUserFormType = {
  email: string;
  password: string;
};

export type RegisterResponse = {
  message: string;
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      aitvo: boolean;
      criado_em: string;
    };
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  };
};