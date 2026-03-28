import { TouchableOpacity } from "react-native";
import { Text, XStack, YStack, View, useTheme } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { CategoryCard } from "../components/card";
import { CategoryCardSkeleton } from "../../../common/skeletons/home";
import { useEffect, useState } from "react";

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
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const primaryColor = theme.primary?.get();

  return (
    <YStack>
      <YStack>
        {isLoading ? (
          <CategoryCardSkeleton />
        ) : (
          <>
            <XStack justify="space-between">
              <Text pb="$md">Categorias</Text>
              <TouchableOpacity>
                <YStack>
                  <XStack>
                    <Text>Ver todos</Text>
                    <Ionicons
                      name="arrow-forward"
                      size={14}
                      color={primaryColor}
                    />
                  </XStack>
                  <View />
                </YStack>
              </TouchableOpacity>
            </XStack>

            <XStack>
              {cards.map((card) => (
                <CategoryCard
                  key={card.id}
                  title={card.title}
                  subtitle={card.subtitle}
                  icon={card.icon}
                  url={card.navigate}
                />
              ))}
            </XStack>
          </>
        )}
      </YStack>
    </YStack>
  );
};

export default Home;
