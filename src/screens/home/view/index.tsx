import { TouchableOpacity } from "react-native";
import { Text, XStack, YStack, View, useTheme } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { CategoryCard } from "../components/card";
import Page from "@components/layout/page";
import { HOME_MODULES_CARDS } from "../model/constants";

const Home = () => {
  const theme = useTheme();

  const primaryColor = theme.primary?.get();

  return (
    <Page>
      <YStack>
        <XStack justify="space-between">
          <Text pb="$md" fontWeight={"600"}>
            Categorias
          </Text>
          <TouchableOpacity>
            <YStack>
              <XStack>
                <Text>Ver todos</Text>
                <Ionicons name="arrow-forward" size={14} color={primaryColor} />
              </XStack>
              <View />
            </YStack>
          </TouchableOpacity>
        </XStack>

        <XStack flexWrap="wrap" gap={20}>
          {HOME_MODULES_CARDS.map((card) => (
            <CategoryCard
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
              url={card.navigate}
            />
          ))}
        </XStack>
      </YStack>
    </Page>
  );
};

export default Home;
