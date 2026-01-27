import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../../../../views/screens/auth";
import LoginScreen from "../../../../views/screens/login";
import Sliders from "../../../../views/screens/sliders";
import Splash from "../../../../views/screens/splash";
import RegisterScreen from "../../../../views/screens/register";

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="splash"
        component={Splash}
        options={{
          title: "splash",
        }}
      />

      <Stack.Screen
        name="sliders"
        component={Sliders}
        options={{
          title: "sliders",
        }}
      />

      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{
          title: "Auth",
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Login",
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: "Register",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
