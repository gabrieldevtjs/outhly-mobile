export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  empresa?: string;
};

export type AuthStore = {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User) => void;
  setLoading: (isLoading: boolean) => void;
  signOut: () => void;
};

