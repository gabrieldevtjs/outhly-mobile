import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { TamaguiProvider } from "@tamagui/core";
import { configTamagui } from "../../../../tamagui.config";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TamaguiProvider config={configTamagui} defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        {children}
        <Toast />
      </QueryClientProvider>
    </TamaguiProvider>
  );
};

export default Providers;
