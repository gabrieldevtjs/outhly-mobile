import { defaultConfig } from "@tamagui/config/v5";
import { createFont, createTamagui, createTokens } from "tamagui";

const defaltValuesBrekpoints = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
  huge: 64,
  giant: 80,
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
  error: "#ff4d4d",
  // dark
  primaryDark: "#D63ED6",
  backgroundDark: "#121212",
  cardDark: "#1E1E1E",
  titleDark: "#2b2e34",
  subtitleDark: "#9DA3AF",
  borderDark: "#2A2A2A",

  // light
  primaryLight: "#D63ED6",
  backgroundLight: "#fffbfb",
  cardLight: "#FFFFFF",
  titleLight: "#1e232e",
  subtitleLight: "#6B7280",
  borderLight: "#E5E7EB",
};

const fonts = createFont({
  family: "System",
  size: {
    ...defaultConfig.fonts.body.size,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
  },
  lineHeight: {
    ...defaultConfig.fonts.body.lineHeight,
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
    xxl: 40,
  },
  weight: {
    ...defaultConfig.fonts.body.weight,
    xs: "400",
    sm: "400",
    md: "400",
    lg: "600",
    xl: "700",
    xxl: "800",
  },
  letterSpacing: {
    ...defaultConfig.fonts.body.letterSpacing,
    xs: 0,
    sm: 0,
    md: 0,
    lg: -0.5,
    xl: -1,
    xxl: -1.5,
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
  fonts: {
    heading: fonts,
    body: fonts,
  },
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
    error: tokens.color.error, 
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
    error: tokens.color.error,
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
    bd: "borderRadius" as const,
  },
});

type OurConfig = typeof configTamagui;
declare module "tamagui" {
  interface TamaguiCustomConfig extends OurConfig {}
}
