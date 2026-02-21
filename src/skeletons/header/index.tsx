import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Skeleton } from "moti/skeleton";

const HeaderSkeleton = () => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 48 - 12) / 2;

  return (
    <View style={[styles.container]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Skeleton colorMode="dark" width={120} height={20} radius={6} />
        <Skeleton colorMode="dark" width={40} height={40} radius={40} />
      </View>
      <View style={{ height: 30 }} />
      <Skeleton colorMode="dark" width={80} height={10} radius={6} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    gap: 0,
		flex: 1
  },
});

export { HeaderSkeleton };
