import { theme } from "@common/utils/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

type CardPaperProps = {
  children: React.ReactNode;
  style?: object;
};

const Card = ({ children, style }: CardPaperProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
  },
});

export { Card };
