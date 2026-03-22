import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@common/hooks/useTheme";

type CardPaperProps = {
  children: React.ReactNode;
  style?: object;
};

const Card = ({ children, style }: CardPaperProps) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.card }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 12,
  },
});

export { Card };
