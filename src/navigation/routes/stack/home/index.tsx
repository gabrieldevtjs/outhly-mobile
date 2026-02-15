import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../../../screens/home/view";
import { Header } from "../../../../components/Header";

const Stack = createNativeStackNavigator();

const HomeRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header />,
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
