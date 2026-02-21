import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootRoutesTypes } from "./types";
import HomeRoutes from "./home";
import SectionRoutes from "./sections";

const Stack = createNativeStackNavigator<RootRoutesTypes>();

const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeRoutes} />
      <Stack.Screen name="Sections" component={SectionRoutes} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
