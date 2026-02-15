export type CreateUserFormType = {
  name: string;
  email: string;
  password: string;
};

export type LoginUserFormType = {
  email: string;
  password: string;
};

export type ResponseTokens = {
  access_token: string;
  refresh_token: string;
};
