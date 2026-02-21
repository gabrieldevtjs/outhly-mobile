import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "../routes/stack/auth";
import Providers from "./providers";
import { useAuthStore } from "../../stores/auth";
import HomeRoutes from "../routes/stack/home";
import RootRoutes from "../routes/stack";

const Container = () => {
  const { user } = useAuthStore();

  return (
    <NavigationContainer>
      <Providers>{user ? <RootRoutes /> : <AuthRoutes />}</Providers>
    </NavigationContainer>
  );
};

export default Container;
