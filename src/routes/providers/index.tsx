import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { TamaguiProvider, Theme, YStack } from "tamagui";
import { configTamagui } from "../../../tamagui.config";
import { useThemeStore } from "@common/stores/theme";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useThemeStore();

  return (
    <TamaguiProvider config={configTamagui} defaultTheme={mode}>
      <Theme name={mode}>
        <YStack style={{ flex: 1 }} bg="$bg">
          <QueryClientProvider client={queryClient}>
            {children}
            <Toast />
          </QueryClientProvider>
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
};

export default Providers;
