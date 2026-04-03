import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuthStore } from "@common/stores/auth";
import AuthStack from "../stack/auth";
import AppStack from "../stack/app";
import Home from "@screens/home/view";
import Config from "@screens/config/view";
import AuthScreen from "@screens/auth/home/view";
import LoginScreen from "@screens/auth/login/view";
import RegisterScreen from "@screens/auth/register/view";
import { createStaticNavigation } from "@react-navigation/native";
import { Header } from "@components/layout/header";

const useIsSignedIn = () => {
  const user = useAuthStore((s) => s.user);
  console.log("useIsSignedIn:", !!user);
  return !!user;
};

const useIsSignedOut = () => {
  const user = useAuthStore((s) => s.user);
  console.log("useIsSignedOut:", !user);
  return !user;
};

console.log(!!useIsSignedIn);

const RootStack = createNativeStackNavigator({
  // screens: {
  //   Home: {
  //     if: useIsSignedIn,
  //     screen: AppStack,
  //     options: {
  //       headerShown: false,
  //     },
  //   },
  //   SignIn: {
  //     if: useIsSignedOut,
  //     screen: AuthStack,
  //     options: {
  //       headerShown: false,
  //     },
  //   },
  // },
  groups: {
    SignedIn: {
      if: useIsSignedIn,
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
          options: {
            headerShown: true,
            header: () => <Header />,
          },
          screen: Home,
        },
        Config: {
          options: {
            headerShown: false,
            presentation: "formSheet",
            sheetAllowedDetents: [0.7],
            sheetGrabberVisible: true,
            sheetCornerRadius: 24,
            sheetLargestUndimmedDetentIndex: -1,
          },
          screen: Config,
        },
      },
    },
    SignedOut: {
      if: useIsSignedOut,
      screenOptions: {
        headerShown: false,
      },
      screens: {
        Auth: AuthScreen,
        Login: LoginScreen,
        Register: RegisterScreen,
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

export default RootStack;
