import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootRoutesTypes } from "./types";
import { Header } from "@components/Header";
import Home from "@screens/home/view";
import { SenhaViewSection } from "@screens/sections/senhas/view";
import { HeaderBack } from "@components/HeaderBack";
import Splash from "@screens/sliders/splash";
import Config from "@screens/config/view";
import TesteWatermelon from "@screens/sections/gerador";

const Stack = createNativeStackNavigator<RootRoutesTypes>();

const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        fullScreenGestureEnabled: true,
        animation: "simple_push",
        animationDuration: 600,
        animationMatchesGesture: true,
        animationTypeForReplace: "push",
        freezeOnBlur: true,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <Header />,
        }}
      />

      <Stack.Screen
        name="Sections"
        component={TesteWatermelon}
        options={{
          header: () => <HeaderBack title="Senhas" />,
          presentation: "containedModal",
          sheetAllowedDetents: [0.5],
          sheetInitialDetentIndex: 0,
          sheetGrabberVisible: true,
          sheetCornerRadius: 24,
          sheetLargestUndimmedDetentIndex: -1,
        }}
      />

      <Stack.Screen
        name="Config"
        component={Config}
        options={{
          headerShown: false,
          presentation: "formSheet",
          sheetAllowedDetents: [0.7],
          sheetGrabberVisible: true,
          sheetCornerRadius: 24,
          sheetLargestUndimmedDetentIndex: -1,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
