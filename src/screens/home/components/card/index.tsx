import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeRoutesType } from "../../../../navigation/routes/stack/home/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootRoutesTypes } from "../../../../navigation/routes/stack/types";
import { SectionRoutesType } from "../../../../navigation/routes/stack/sections/types";

type Props = {
  title: string;
  subtitle: string;
  icon?: keyof typeof Ionicons.glyphMap;
  url: keyof SectionRoutesType;
};

const CategoryCard = ({
  title,
  subtitle,
  icon = "ellipsis-horizontal",
  url,
}: Props) => {
  const { width } = useWindowDimensions();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootRoutesTypes>>();

  const handleNavigate = () => {
    navigation.navigate("Sections", {
      screen: url,
    });
  };

  return (
    <TouchableOpacity
      style={[styles.container, { width: (width - 48 - 12) / 2 }]}
      onPress={handleNavigate}
      // activeOpacity={handleNavigate ? 0.7 : 1}
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
