import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CategoryCard } from "../components/card";
import { CategoryCardSkeleton } from "../../../common/skeletons/home";
import { useEffect, useState } from "react";
import { useTheme } from "../../../common/hooks/useTheme";

const cards = [
  {
    id: "passwords",
    title: "Senhas",
    subtitle: "124 itens salvos",
    icon: "lock-closed" as const,
    navigate: "Senhas" as const,
  },
  {
    id: "annotations",
    title: "Anotações",
    subtitle: "32 notas salvas",
    icon: "document-text" as const,
    navigate: "Senhas" as const,
  },
  {
    id: "generator",
    title: "Gerador",
    subtitle: "Criar senha forte",
    icon: "key" as const,
    navigate: "Senhas" as const,
  },
  {
    id: "leaks",
    title: "Vazamentos",
    subtitle: "Monitoramento",
    icon: "shield" as const,
    navigate: "Senhas" as const,
  },
] as const;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const styles = makeStyles(theme.colors);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {isLoading ? (
          <CategoryCardSkeleton />
        ) : (
          <>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Categorias</Text>
              <TouchableOpacity style={styles.seeAllContent}>
                <View style={styles.seeAllRow}>
                  <Text style={styles.sectionSubtitle}>Ver todos</Text>
                  <Ionicons name="arrow-forward" size={14} color={theme.colors.primary} />
                </View>
                <View style={styles.underline} />
              </TouchableOpacity>
            </View>

            <View style={styles.grid}>
              {cards.map((card) => (
                <CategoryCard
                  key={card.id}
                  title={card.title}
                  subtitle={card.subtitle}
                  icon={card.icon}
                  url={card.navigate}
                />
              ))}
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const makeStyles = (colors: ReturnType<typeof useTheme>["theme"]["colors"]) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
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
      color: colors.title,
      fontSize: 16,
      fontWeight: "700",
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
      backgroundColor: colors.primary,
      borderRadius: 12,
    },
    sectionSubtitle: {
      color: colors.primary,
      fontSize: 14,
      fontWeight: "700",
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 12,
    },
  });

export default Home;
