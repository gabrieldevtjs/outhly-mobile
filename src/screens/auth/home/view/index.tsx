import { useTheme, YStack } from "tamagui";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "@common/components/ui/text";
import { Button, ButtonText } from "@common/components/ui/button";
import Page from "@components/layout/page";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackTypeRoutes } from "@routes/stack/auth/types";

type Routes = NativeStackNavigationProp<AuthStackTypeRoutes>;

const AuthScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation<Routes>();

  return (
    <Page px="$xxl">
      <YStack flex={1} justify="flex-end" py="$xxl" gap="$space.18">
        <YStack gap="$md" items="flex-start">
          <Ionicons name="finger-print" size={60} color={theme.primary.val} />

          <Text fontWeight="800" fontSize={"$10"} width="100%">
            Olá, Seja Bem Vindo ao <Text color="$primary">Outly</Text>
          </Text>

          <Text variant="subtitle" fontSize={"$4"}>
            Suas senhas e anotações, seguras e sempre com você.
          </Text>
        </YStack>

        <YStack gap="$lg" items="center">
          <Text variant="caption" fontSize={"$2"}>
            Ao continuar, você concorda com nossos Termos de Uso e Política de
            Privacidade. O Outly utiliza criptografia de ponta a ponta para
            proteger suas senhas e anotações. Seus dados pertencem apenas a
            você.{" "}
            <Text variant="caption" color="$primary">
              Saiba mais sobre nossa segurança
            </Text>
          </Text>

          <Button
            variant="outlined"
            width="100%"
            onPress={() => navigation.navigate("Login")}
          >
            <ButtonText color="$primary">Login</ButtonText>
          </Button>

          <Button
            variant="contained"
            width="100%"
            onPress={() => navigation.navigate("Register")}
          >
            <ButtonText>Register</ButtonText>
          </Button>
        </YStack>
      </YStack>
    </Page>
  );
};

export default AuthScreen;
