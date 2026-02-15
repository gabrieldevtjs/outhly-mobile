import { AxiosError, AxiosInstance } from "axios";

type SignOut = () => void;

type ApiInstance = AxiosInstance & {
  registerInterceptTokenManager: (signOut: SignOut) => () => void;
};

type QueueItem = {
  onSuccess: (token: string) => void;
  onFailure: (error: AxiosError) => void;
};

export { SignOut, ApiInstance, QueueItem };
