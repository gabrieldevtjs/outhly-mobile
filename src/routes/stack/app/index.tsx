import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "@components/layout/header";
import Home from "@screens/home/view";
import Config from "@screens/config/view";

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
