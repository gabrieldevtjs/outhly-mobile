import { ThemeType } from "../../theme";

export type ThemeStore = {
  mode: ThemeType;
  toggleTheme: () => void;
  setTheme: (mode: ThemeType) => void;
};
