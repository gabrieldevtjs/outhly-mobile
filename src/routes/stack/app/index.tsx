import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "@components/Header";
import { HeaderBack } from "@components/HeaderBack";
import Home from "@screens/home/view";
import Config from "@screens/config/view";
import TesteWatermelon from "@screens/sections/gerador";

const AppStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: true,
    fullScreenGestureEnabled: true,
    animation: "simple_push",
    animationDuration: 600,
    animationMatchesGesture: true,
    animationTypeForReplace: "push",
    freezeOnBlur: true,
  },
  screens: {
    Home: {
      screen: Home,
      options: {
        header: () => <Header />,
      },
    },
    Sections: {
      screen: TesteWatermelon,
      options: {
        header: () => <HeaderBack title="Senhas" />,
        presentation: "containedModal",
        sheetAllowedDetents: [0.5],
        sheetInitialDetentIndex: 0,
        sheetGrabberVisible: true,
        sheetCornerRadius: 24,
        sheetLargestUndimmedDetentIndex: -1,
      },
    },
    Config: {
      screen: Config,
      options: {
        headerShown: false,
        presentation: "formSheet",
        sheetAllowedDetents: [0.7],
        sheetGrabberVisible: true,
        sheetCornerRadius: 24,
        sheetLargestUndimmedDetentIndex: -1,
      },
    },
  },
});

export default AppStack;
