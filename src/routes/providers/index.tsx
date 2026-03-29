import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { TamaguiProvider, Theme, YStack } from "tamagui";
import { configTamagui } from "../../../tamagui.config";
import { useThemeStore } from "@common/stores/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useThemeStore();

  return (
    <SafeAreaProvider>
      <TamaguiProvider config={configTamagui} defaultTheme={mode}>
        <Theme name={"dark"}>
          <YStack flex={1}>
            <QueryClientProvider client={queryClient}>
              {children}
              <Toast />
            </QueryClientProvider>
          </YStack>
        </Theme>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
};

export default Providers;
