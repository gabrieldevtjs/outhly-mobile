import { StyleSheet, View, Text } from "react-native";
import { Card } from "@components/Card";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "@common/hooks/useTheme";
import { Theme } from "@common/theme";

type CardProps = {
  title: string;
  subtitle: string;
};

const CardSenha = ({ title, subtitle }: CardProps) => {
  const { theme } = useTheme();
  const styles = makeStyles(theme.colors);

  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.cardLeft}>
          <View style={styles.sectionImage}>
            <Icon name="lock" size={22} color={theme.colors.primary} />
          </View>
          <View style={styles.sectionTitle}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
        <Feather name="copy" size={22} color={theme.colors.primary} />
      </View>
    </Card>
  );
};

const makeStyles = (colors: Theme["colors"]) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    cardLeft: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    sectionImage: {
      padding: 12,
      borderRadius: 12,
      backgroundColor: `${colors.primary}20`,
    },
    sectionTitle: {
      gap: 4,
    },
    title: {
      color: colors.title,
      fontSize: 18,
      fontWeight: "700",
    },
    subtitle: {
      color: colors.subtitle,
      fontSize: 14,
      fontWeight: "700",
    },
  });

export { CardSenha };
