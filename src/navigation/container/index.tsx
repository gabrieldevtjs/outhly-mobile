import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "../routes/stack/auth";
import Providers from "./providers";
import { useAuthStore } from "../../stores/auth";
import HomeRoutes from "../routes/stack/home";

const Container = () => {
  const { user } = useAuthStore();

  return (
    <NavigationContainer>
      <Providers>{user ? <HomeRoutes /> : <AuthRoutes />}</Providers>
    </NavigationContainer>
  );
};

export default Container;
