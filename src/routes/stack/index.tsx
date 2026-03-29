import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuthStore } from "@common/stores/auth";
import AuthStack from "../stack/auth";
import AppStack from "../stack/app";

const useIsSignedIn = () => !!useAuthStore((s) => s.user);
const useIsSignedOut = () => !useAuthStore((s) => s.user);

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      if: useIsSignedIn,
      screen: AppStack,
      options: {
        headerShown: false,
      },
    },
    SignIn: {
      if: useIsSignedOut,
      screen: AuthStack,
      options: {
        headerShown: false,
      },
    },
  },
});

export default RootStack;