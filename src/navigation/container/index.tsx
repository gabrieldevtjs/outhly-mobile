import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AuthRoutes from "../routes/stack/auth";
import Providers from "./providers";
import { useAuthStore } from "../../stores/auth";
import AppRoutes from "../routes/stack";
import { theme } from "@common/utils/theme";

const Container = () => {
  const { user } = useAuthStore();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        dark: true,
        colors: {
          ...DefaultTheme.colors,
          background: theme.colors.background,
        },
      }}
    >
      <Providers>{user ? <AppRoutes /> : <AuthRoutes />}</Providers>
    </NavigationContainer>
  );
};

export default Container;
