import { defaultConfig } from '@tamagui/config/v5'
import { createTamagui } from 'tamagui'

export const configTamagui = createTamagui({
  ...defaultConfig,
  media: {
    ...defaultConfig.media,
  },
})

type OurConfig = typeof configTamagui

declare module 'tamagui' {
  interface TamaguiCustomConfig extends OurConfig {}
}