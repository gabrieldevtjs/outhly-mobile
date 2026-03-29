import { Button as ButtonTamagui, styled } from "tamagui";

export const Button = styled(ButtonTamagui, {
  variants: {
    variant: {
      contained: {
        backgroundColor: "$primary",
      },
      outlined: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "$primary",
      },
    },
  } as const,

  defaultVariants: {
    variant: "contained",
  },
});

export const ButtonText = styled(ButtonTamagui.Text, {
  fontWeight: "bold",
  color: "$white",
});