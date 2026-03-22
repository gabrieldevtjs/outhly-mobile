import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../../common/stores/auth";
import { useEffect, useState } from "react";
import { HeaderSkeleton } from "../../common/skeletons/header";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
};

const HeaderBack = ({ title }: Props) => {
  const { user, signOut } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.placeholder} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#1c1c1e",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  placeholder: {
    width: 36,
  },
  content: {
    flex: 1,
  },
});

export { HeaderBack };
