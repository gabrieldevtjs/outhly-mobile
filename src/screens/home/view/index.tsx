import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CategoryCard } from "../components/card";
import { CategoryCardSkeleton } from "../../../skeletons/home";
import { useEffect, useState } from "react";

const cards = [
  {
    id: "passwords",
    title: "Senhas",
    subtitle: "124 itens salvos",
    icon: "lock-closed" as const,
    navigate: "Senhas" as const, // ✅
  },
  {
    id: "annotations",
    title: "Anotações",
    subtitle: "32 notas salvas",
    icon: "document-text" as const,
    navigate: "Senhas" as const, // ✅
  },
  {
    id: "generator",
    title: "Gerador",
    subtitle: "Criar senha forte",
    icon: "key" as const,
    navigate: "Senhas" as const, // ✅
  },
  {
    id: "leaks",
    title: "Vazamentos",
    subtitle: "Monitoramento",
    icon: "shield" as const,
    navigate: "Senhas" as const, // ✅
  },
] as const;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

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
                  <Ionicons name="arrow-forward" size={14} color="#F15EF1" />
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

export default Home;
