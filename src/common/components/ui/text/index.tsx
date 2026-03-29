import { Text as TextTamagui, styled } from "tamagui";

export const Text = styled(TextTamagui, {
  variants: {
    variant: {
      title: {
        color: "$title",
      },
      subtitle: {
        color: "$subtitle",
      },
      body: {
        color: "$title",
      },
      caption: {
        color: "$subtitle",
      },
    }
  } as const,
});
