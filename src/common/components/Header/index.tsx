import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@common/hooks/useTheme";
import { HeaderSkeleton } from "@common/skeletons/header";
import { useAuthStore } from "@common/stores/auth";

const Header = () => {
  const navigation = useNavigation<any>();
  const { user, signOut } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);
  const { mode, toggleTheme, theme } = useTheme();

  const redirectConfig = () => {
    navigation.navigate("Config");
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView edges={["top"]} style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {isLoading ? (
        <HeaderSkeleton />
      ) : (
        <View style={styles.row}>
          <View style={styles.info}>
            <Text style={[styles.greeting, { color: theme.colors.title }]}>
              Olá, <Text style={{ color: theme.colors.primary }}>{user?.name}</Text>
            </Text>

            <Text style={[styles.badgeText, { color: theme.colors.subtitle }]}>Bem vindo ao seu cofre</Text>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity onPress={toggleTheme} activeOpacity={0.7}>
              <Ionicons
                name={mode === "dark" ? "sunny" : "moon"}
                size={26}
                color={theme.colors.primary}
              />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} onPress={() => redirectConfig()}>
              <Ionicons name="person-circle" size={38} color={mode === "dark" ? "#fff" : theme.colors.primary} />
            </TouchableOpacity>
          </View>
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
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export { Header };
