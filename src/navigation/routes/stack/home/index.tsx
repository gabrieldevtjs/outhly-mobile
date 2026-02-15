import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../../../screens/home/view";

const Stack = createNativeStackNavigator();

const HomeRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeRoutes;
