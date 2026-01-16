  import React from "react";
  import { NavigationContainer } from "@react-navigation/native";
  import AuthRoutes from "../routes/stack/auth";


  const Container = () => {
    return (
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    );
  };

  export default Container;
