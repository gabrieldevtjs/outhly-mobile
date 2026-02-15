import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CategoryCard } from "../components/card";

const cards = [
  {
    id: "passwords",
    title: "Minhas Senhas",
    subtitle: "124 itens salvos",
    icon: "ellipsis-horizontal" as const,
  },
  {
    id: "favorites",
    title: "Favoritos",
    subtitle: "Acesso prioritário",
    icon: "star" as const,
  },
  {
    id: "generator",
    title: "Gerador",
    subtitle: "Criar senha forte",
    icon: "key" as const,
  },
  {
    id: "leaks",
    title: "Vazamentos",
    subtitle: "Monitoramento",
    icon: "shield" as const,
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Meus acessos</Text>

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
            />
          ))}
        </View>
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
