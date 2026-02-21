import { StyleSheet, View, Text } from "react-native";
import { Card } from "@components/Card";
import { Feather } from "@expo/vector-icons";
import { theme } from "@common/utils/theme";

type CardProps = {
  title: string;
  subtitle: string;
};

const CardSenha = ({ title, subtitle }: CardProps) => {
  return (
    <Card>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <View style={styles.sectionImage}></View>
          <View style={styles.sectionTitle}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
        <Feather name="copy" size={24} color={theme.colors.primary} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionImage: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
  },
  sectionTitle: {
    gap: 4,
  },
  title: {
    color: theme.colors.title,
    fontSize: 18,
    fontWeight: "700",
  },
  subtitle: {
    color: theme.colors.subtitle,
    fontSize: 14,
    fontWeight: "700",
  },
});

export { CardSenha };
