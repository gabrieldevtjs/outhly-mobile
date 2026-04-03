export type User = {
  id: string;
  name: string;
  email: string;
};

export interface AuthStore {
  user: User | null
  isHydrated: boolean
  setUser: (user: User) => void
  setHydrated: (isHydrated: boolean) => void
  signOut: () => void
}