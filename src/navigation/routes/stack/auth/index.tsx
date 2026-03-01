import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "@screens/auth/home/view";
import LoginScreen from "@screens/auth/login/view";
import RegisterScreen from "@screens/auth/register/view";
import Sliders from "@screens/sliders";
import Splash from "@screens/sliders/splash";

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

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
