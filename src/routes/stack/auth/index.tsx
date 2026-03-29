import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "@screens/auth/home/view";
import LoginScreen from "@screens/auth/login/view";
import RegisterScreen from "@screens/auth/register/view";

const AuthStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    // Sliders: {
    //   screen: Sliders,
    //   options: { title: "sliders" },
    // },
    Auth: {
      screen: AuthScreen,
      options: { title: "Auth" },
    },
    Login: {
      screen: LoginScreen,
      options: { title: "Login" },
    },
    Register: {
      screen: RegisterScreen,
      options: { title: "Register" },
    },
  },
});

export default AuthStack;
