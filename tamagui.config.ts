import { defaultConfig } from "@tamagui/config/v5";
import { createTamagui, createTokens } from "tamagui";

const defaltValuesBrekpoints = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

const defaltValuesColors = {
  white: "#fff",
  black: "#000",
  primary: "#F15EF1",
  background: "#121212",
};

const tokens = createTokens({
  ...defaultConfig.tokens,
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
  tokens,
  themes: {
    ...defaultConfig.themes,
    light: {
      ...defaultConfig.themes.light,
      bg: "$white",
      color: "$black",
      primary: "$primary",
    },
    dark: {
      ...defaultConfig.themes.dark,
      bg: "$background",
      color: "$white",
      primary: "$primary",
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
    px: "paddingHorizontal",
  },
});

type OurConfig = typeof configTamagui;

declare module "tamagui" {
  interface TamaguiCustomConfig extends OurConfig {}
}
