export const themes = {
  dark: {
    colors: {
      primary: "#F15EF1",
      background: "#121212",
      card: "#1E1E1E",
      title: "#F3F4F6",
      subtitle: "#9DA3AF",
      border: "#2A2A2A",
    },
  },
  light: {
    colors: {
      primary: "#D63ED6",
      background: "#F5F5F5",
      card: "#FFFFFF",
      title: "#111827",
      subtitle: "#6B7280",
      border: "#E5E7EB",
    },
  },
};

export type ThemeType = keyof typeof themes;
export type Theme = (typeof themes)[ThemeType];
