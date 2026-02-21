import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppRoutesTypes } from "./types";
import { Header } from "@components/Header";
import Home from "@screens/home/view";

const Stack = createNativeStackNavigator<AppRoutesTypes>();

const AppRoutes = () => {
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

export default AppRoutes;
