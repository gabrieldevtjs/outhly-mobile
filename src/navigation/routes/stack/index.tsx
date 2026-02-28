import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootRoutesTypes } from "./types";
import { theme } from "@common/utils/theme";
import { Header } from "@components/Header";
import Home from "@screens/home/view";
import { SenhaViewSection } from "@screens/sections/senhas/view";
import { HeaderBack } from "@components/HeaderBack";
import Splash from "@screens/sliders/splash";

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
      {/* <Stack.Screen
        name="splash"
        component={Splash}
        options={{
          title: "splash",
          headerShown: false,
        }}
      /> */}

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <Header />,
        }}
      />

      <Stack.Screen
        name="Sections"
        component={SenhaViewSection}
        options={{
          header: () => <HeaderBack title="Senhas" />,
          presentation: "modal",
          sheetAllowedDetents: [0.5, 1.0],
          sheetGrabberVisible: true,
          sheetCornerRadius: 24,
          sheetLargestUndimmedDetentIndex: -1,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
