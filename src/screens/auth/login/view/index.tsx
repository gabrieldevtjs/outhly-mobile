import { Controller } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { XStack, YStack, Input, useTheme } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { UseLoginViewModel } from "../viewModel";
import { Text } from "@common/components/ui/text";
import { Button, ButtonText } from "@common/components/ui/button";
import Page from "@components/layout/page";

const LoginScreen = () => {
  const {
    control,
    errors,
    showPassword,
    toggleShowPassword,
    handleSubmit,
    isSubmitting,
    goToRegister,
  } = UseLoginViewModel();

  const theme = useTheme();

  return (
    <Page>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <YStack
            flex={1}
            px="$xxl"
            pt="$giant"
            pb="$xxl"
            justify="center"
            gap="$xxl"
          >

            <YStack items="center">
              <Image
                source={require("@assets/images/icon/icon-new.png")}
                style={{ width: 320, height: 120 }}
                resizeMode="cover"
              />
            </YStack>

            {/* form */}
            <YStack gap="$md">
              {/* email */}
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <YStack gap="$xs">
                    <XStack
                      items="center"
                      bg="$card"
                      rounded="$lg"
                      borderWidth={2}
                      borderColor={errors.email ? "$error" : "$border"}
                      px="$lg"
                      height="$huge"
                    >
                      <Ionicons
                        name="mail-outline"
                        size={20}
                        color={theme.subtitle.get()}
                      />
                      <Input
                        flex={1}
                        placeholder="Email"
                        placeholderTextColor={"$subtitle"}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        color="$title"
                        bg="transparent"
                        borderWidth={0}
                        fontSize="$md"
                      />
                    </XStack>
                    {errors.email && (
                      <Text variant="caption" color="$error" ml="$xs">
                        {errors.email.message}
                      </Text>
                    )}
                  </YStack>
                )}
              />

              {/* password */}
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <YStack gap="$xs">
                    <XStack
                      items="center"
                      bg="$card"
                      rounded="$lg"
                      borderWidth={2}
                      borderColor={errors.password ? "$error" : "$border"}
                      px="$lg"
                      height="$huge"
                    >
                      <Ionicons
                        name="lock-closed-outline"
                        size={20}
                        color={theme.subtitle.get()}
                      />
                      <Input
                        flex={1}
                        placeholder="Senha"
                        placeholderTextColor={"$subtitle"}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        secureTextEntry={!showPassword}
                        color="$title"
                        bg="transparent"
                        borderWidth={0}
                        fontSize="$md"
                      />
                      <Ionicons
                        name={showPassword ? "eye-outline" : "eye-off-outline"}
                        size={20}
                        color={theme.primary.get()}
                        onPress={toggleShowPassword}
                      />
                    </XStack>
                    {errors.password && (
                      <Text variant="caption" color="$error" ml="$xs">
                        {errors.password.message}
                      </Text>
                    )}
                  </YStack>
                )}
              />

              {/* forgot password */}
              <Text variant="caption" self="flex-end" onPress={() => {}}>
                Esqueceu a senha?
              </Text>

              {/* submit */}
              <Button
                variant="contained"
                width="100%"
                onPress={handleSubmit}
                disabled={isSubmitting}
                opacity={isSubmitting ? 0.7 : 1}
              >
                <ButtonText>
                  {isSubmitting ? "Entrando..." : "Entrar"}
                </ButtonText>
              </Button>

              {/* divider */}
              <XStack items="center" gap="$md">
                <YStack flex={1} height={1} bg="$border" />
                <Text variant="caption">OU</Text>
                <YStack flex={1} height={1} bg="$border" />
              </XStack>

              {/* social */}
              <XStack justify="center" gap="$lg">
                {(["logo-google", "logo-apple", "logo-facebook"] as const).map(
                  (icon) => (
                    <YStack
                      key={icon}
                      width="$huge"
                      height="$huge"
                      bd="$xxxl"
                      items="center"
                      justify="center"
                      borderWidth={2}
                      borderColor="$border"
                    >
                      <Ionicons
                        name={icon}
                        size={24}
                        color={theme.primary.get()}
                      />
                    </YStack>
                  ),
                )}
              </XStack>

              {/* signup */}
              <XStack justify="center" items="center">
                <Text variant="caption">Não tem uma conta? </Text>
                <Text variant="caption" color="$primary" onPress={goToRegister}>
                  Cadastre-se
                </Text>
              </XStack>
            </YStack>
          </YStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </Page>
  );
};

export default LoginScreen;
