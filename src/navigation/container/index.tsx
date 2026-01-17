import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "../routes/stack/auth";
import Providers from "./providers";

const Container = () => {
  return (
    <NavigationContainer>
      {/* <Providers> */}
        <AuthRoutes />
      {/* </Providers> */}
    </NavigationContainer>
  );
};

export default Container;
