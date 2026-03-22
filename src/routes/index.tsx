import React, { useState } from "react";
import { createStaticNavigation } from "@react-navigation/native";
import Providers from "./providers";
import RootStack from "./stack";
import Splash from "@screens/sliders/splash";

const Navigation = createStaticNavigation(RootStack);

const Container = () => {
  const [ready, setReady] = useState(false);

  if (!ready) {
    return <Splash onFinish={() => setReady(true)} />;
  }

  return (
    <Providers>
      <Navigation />
    </Providers>
  );
};

export default Container;
