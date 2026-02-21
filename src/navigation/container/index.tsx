import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "../routes/stack/auth";
import Providers from "./providers";
import { useAuthStore } from "../../stores/auth";
import AppRoutes from "../routes/stack";

const Container = () => {
  const { user } = useAuthStore();

  return (
    <NavigationContainer>
      <Providers>{user ? <AppRoutes /> : <AuthRoutes />}</Providers>
    </NavigationContainer>
  );
};

export default Container;
