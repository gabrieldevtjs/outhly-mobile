import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuthStore } from "@common/stores/auth";
import AuthStack from "../stack/auth";
import AppStack from "../stack/app";

const useIsSignedIn = () => !!useAuthStore((s) => s.user);
const useIsSignedOut = () => !useAuthStore((s) => s.user);

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  groups: {
    SignedIn: {
      if: useIsSignedIn,
      screens: {
        App: AppStack,
      },
    },
    SignedOut: {
      if: useIsSignedOut,
      screens: {
        Auth: AuthStack,
      },
    },
  },
});

export default RootStack;
