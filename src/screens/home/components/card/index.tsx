import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useWindowDimensions } from "react-native";

type Props = {
  title: string;
  subtitle: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

const CategoryCard = ({
  title,
  subtitle,
  icon = "ellipsis-horizontal",
  onPress,
}: Props) => {
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity
      style={[styles.container, { width: (width - 48 - 12) / 2 }]}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View style={styles.iconBox}>
        <Ionicons name={icon} size={20} color="#F15EF1" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1e",
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  iconBox: {
    backgroundColor: "#28202D",
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  subtitle: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 13,
    fontWeight: "400",
  },
});

export { CategoryCard };
