import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootRoutesTypes } from "./types";
import AppRoutes from "./home";
import SectionRoutes from "./sections";

const Stack = createNativeStackNavigator<RootRoutesTypes>();

const RootRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="App" component={AppRoutes} />
      <Stack.Screen name="Sections" component={SectionRoutes} />
    </Stack.Navigator>
  );
};

export default RootRoutes;