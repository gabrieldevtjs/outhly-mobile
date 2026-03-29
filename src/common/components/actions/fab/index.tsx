import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "@common/hooks/useTheme";

const Fab = ({ onPress }: { onPress?: () => void }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: theme.colors.primary }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Feather name="plus" size={28} color={"#fff"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 65,
    height: 65,
    right: 35,
    bottom: 55,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { Fab };
