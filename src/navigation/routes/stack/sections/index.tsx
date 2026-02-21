import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SectionRoutesType } from "./types";
import { SenhaViewSection } from "../../../../screens/sections/senhas/view";
import { HeaderBack } from "@components/HeaderBack";

const Stack = createNativeStackNavigator<SectionRoutesType>();

const SectionRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <HeaderBack title="teste" />,
      }}
    >
      <Stack.Screen
        name="Senhas"
        component={SenhaViewSection}
        options={{
          title: "Senhas",
        }}
      />
    </Stack.Navigator>
  );
};

export default SectionRoutes;
