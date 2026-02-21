import { theme } from "@common/utils/theme";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const Fab = ({ onPress }: { onPress?: () => void }) => {
  return (
    <TouchableOpacity
      style={styles.container}
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
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
export { Fab };
