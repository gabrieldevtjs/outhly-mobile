import { View, Text, StyleSheet } from "react-native";
import { HeaderBack } from "../../../../components/HeaderBack";

const SenhaViewSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>oii</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  seeAll: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  seeAllContent: {
    gap: 4,
  },
  seeAllRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  underline: {
    height: 1,
    backgroundColor: "#F15EF1",
    borderRadius: 12,
  },
  sectionSubtitle: {
    color: "#F15EF1",
    fontSize: 14,
    fontWeight: "700",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});

export { SenhaViewSection };
