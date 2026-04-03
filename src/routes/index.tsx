import React, { useState } from "react";
import { createStaticNavigation } from "@react-navigation/native";
import Providers from "./providers";
import RootStack, { Navigation } from "./stack";
import Splash from "@screens/sliders/splash";
import { useAuthStore } from "@common/stores/auth";



const Container = () => {
  const isHydrated = useAuthStore((s) => s.isHydrated);
  const [splashDone, setSplashDone] = useState(false);

  if (!isHydrated || !splashDone) {
    return <Splash onFinish={() => setSplashDone(true)} />;
  }

  return (
    <Providers>
      <Navigation />
    </Providers>
  );
};

export default Container;
