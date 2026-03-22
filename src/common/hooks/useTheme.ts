import { themes } from "../theme";
import { useThemeStore } from "../stores/theme";

export const useTheme = () => {
  const { mode, toggleTheme, setTheme } = useThemeStore();
  const theme = themes[mode];

  return { theme, mode, toggleTheme, setTheme };
};
