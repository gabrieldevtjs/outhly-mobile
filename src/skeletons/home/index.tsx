import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Skeleton } from "moti/skeleton";

const CategoryCardSkeleton = () => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 48 - 12) / 2;

  return (
    <View style={[styles.container]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Skeleton colorMode="dark" width={100} height={13} radius={6} />
        <Skeleton colorMode="dark" width={80} height={13} radius={6} />
      </View>
      <View style={{ height: 12 }} />
      <View style={{ gap: 10, flexDirection: "row", flexWrap: "wrap" }}>
        <Skeleton colorMode="dark" width={cardWidth} height={120} radius={10} />
        <Skeleton colorMode="dark" width={cardWidth} height={120} radius={10} />
        <Skeleton colorMode="dark" width={cardWidth} height={120} radius={10} />
        <Skeleton colorMode="dark" width={cardWidth} height={120} radius={10} />
      </View>
      <View style={{ height: 24 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    gap: 0,
    flex: 1,
  },
});

export { CategoryCardSkeleton };
