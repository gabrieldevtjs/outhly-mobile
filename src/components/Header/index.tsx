import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../../stores/auth";
import { useEffect, useState } from "react";
import { HeaderSkeleton } from "../../skeletons/header";

const Header = () => {
  const { user , signOut} = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {isLoading ? (
        <HeaderSkeleton />
      ) : (
        <View style={styles.row}>
          <View style={styles.info}>
            <Text style={styles.greeting}>
              Olá, <Text style={{ color: "#F15EF1" }}>{user?.name}</Text>
            </Text>

            <Text style={styles.badgeText}>Bem vindo ao seu cofre</Text>
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={() => signOut}>
            <Ionicons name="person-circle" size={38} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  
  },
  info: {
    flex: 1,
    marginRight: 12,
    gap: 6,
  },
  greeting: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
  },
  badgeText: {
    color: "rgba(252, 252, 252, 0.45)",
    fontSize: 14,
    fontWeight: "500",
  },
});

export { Header };
