import React, { useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AuthRoutes from "../routes/stack/auth";
import Providers from "./providers";
import { useAuthStore } from "../../stores/auth";
import AppRoutes from "../routes/stack";
import { theme } from "@common/utils/theme";
import Splash from "@screens/sliders/splash";

const Container = () => {
  const { user, signOut } = useAuthStore();

  // signOut()
  const [ready, setReady] = useState(false);

  if (!ready) {
    return <Splash onFinish={() => setReady(true)} />;
  }

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
