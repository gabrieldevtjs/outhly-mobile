import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../../../../views/screens/auth";
import LoginScreen from "../../../../views/screens/login";
import Sliders from "../../../../views/screens/sliders";

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen
        name="aaaaa"
        component={Sliders}
        options={{
          title: "Auth",
        }}
      />

      {/* <Stack.Screen
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
      /> */}
    </Stack.Navigator>
  );
};

export default AuthRoutes;
