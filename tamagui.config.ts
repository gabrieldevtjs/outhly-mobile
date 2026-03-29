import { defaultConfig } from "@tamagui/config/v5";
import { createFont, createTamagui, createTokens } from "tamagui";

const defaltValuesBrekpoints = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

const defaultFontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 32,
};

const defaltValuesColors = {
  // fixas
  white: "#fff",
  black: "#000",

  // dark
  primaryDark: "#F15EF1",
  backgroundDark: "#121212",
  cardDark: "#1E1E1E",
  titleDark: "#F3F4F6",
  subtitleDark: "#9DA3AF",
  borderDark: "#2A2A2A",

  // light
  primaryLight: "#D63ED6",
  backgroundLight: "#F5F5F5",
  cardLight: "#FFFFFF",
  titleLight: "#1e232e",
  subtitleLight: "#6B7280",
  borderLight: "#E5E7EB",
};

const systemFont = createFont({
  family: "Helvetica, Arial, sans-serif",
  size: {
    1: 12,
    2: 14,
    3: 15,
  },
  lineHeight: {
    // 1 will be 22
    2: 22,
  },
  weight: {
    1: "300",
    // 2 will be 300
    3: "600",
  },
  letterSpacing: {
    1: 0,
    2: -1,
    // 3 will be -1
  },
  // (native only) swaps out fonts by face/style
  face: {
    300: { normal: "InterLight", italic: "InterItalic" },
    600: { normal: "InterBold" },
  },
});

const tokens = createTokens({
  size: {
    ...defaultConfig.tokens.size,
    ...defaltValuesBrekpoints,
  },
  space: {
    ...defaultConfig.tokens.space,
    ...defaltValuesBrekpoints,
  },
  radius: {
    ...defaultConfig.tokens.radius,
    ...defaltValuesBrekpoints,
  },
  zIndex: {
    ...defaultConfig.tokens.zIndex,
  },
  color: {
    ...defaltValuesColors,
  },

});

export const configTamagui = createTamagui({
  ...defaultConfig,
  // fonts: {
  //   heading: systemFont,
  //   body: systemFont,
  // },
  tokens,
  themes: {
    light: {
      ...defaultConfig.themes.light,
      bg: tokens.color.backgroundLight,
      color: tokens.color.black,
      primary: tokens.color.primaryLight,
      card: tokens.color.cardLight,
      title: tokens.color.titleLight,
      subtitle: tokens.color.subtitleLight,
      border: tokens.color.borderLight,
    },
    dark: {
      ...defaultConfig.themes.dark,
      bg: tokens.color.backgroundDark,
      color: tokens.color.white,
      primary: tokens.color.primaryDark,
      card: tokens.color.cardDark,
      title: tokens.color.titleDark,
      subtitle: tokens.color.subtitleDark,
      border: tokens.color.borderDark,
    },
  },
  media: {
    ...defaultConfig.media,

    sm: {
      maxWidth: 860,
    },
    gtSm: {
      minWidth: 861,
    },
    short: {
      maxHeight: 820,
    },
    hoverable: {
      hover: "hover",
    },
    touchable: {
      pointer: "coarse",
    },
  },
  shorthands: {
    ...defaultConfig.shorthands,
    flex: "flex" as const,
  },
});

type OurConfig = typeof configTamagui;
declare module "tamagui" {
  interface TamaguiCustomConfig extends OurConfig {}
}
