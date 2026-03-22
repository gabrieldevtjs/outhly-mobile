import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  RootRoutesTypes,
  SectionRoutesType,
} from "../../../../routes/stack/types";
import { useTheme } from "@common/hooks/useTheme";
import { Theme } from "@common/theme";

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
  const { theme } = useTheme();
  const styles = makeStyles(theme.colors);

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
    >
      <View style={styles.iconBox}>
        <Ionicons name={icon} size={20} color={theme.colors.primary} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

const makeStyles = (colors: Theme["colors"]) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: 16,
      gap: 8,
    },
    iconBox: {
      backgroundColor: `${colors.primary}20`,
      width: 36,
      height: 36,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 4,
    },
    title: {
      color: colors.title,
      fontSize: 15,
      fontWeight: "600",
    },
    subtitle: {
      color: colors.subtitle,
      fontSize: 13,
      fontWeight: "400",
    },
  });

export { CategoryCard };
