import { defaultConfig } from "@tamagui/config/v5";
import { createTamagui, createTokens } from "tamagui";

const tokens = createTokens({
  ...defaultConfig.tokens,
  size: {
    ...defaultConfig.tokens.size,
    sm: 8,
    md: 12,
    lg: 20,
  },
  space: {
    ...defaultConfig.tokens.space,
    sm: 4,
    md: 8,
    lg: 12,
  },
  radius: {
    ...defaultConfig.tokens.radius,
    none: 0,
    sm: 3,
  },
  zIndex: {
    ...defaultConfig.tokens.zIndex,
  },
  color: {
    white: "#fff",
    black: "#000",
    primary: "#F15EF1",
    background: "#121212",
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
