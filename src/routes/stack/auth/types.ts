import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthStackTypeRoutes = {
  Auth: undefined;
  Login: undefined;
  Register: undefined;
};

export type AuthStackNavigationTypeRoutes =
  NativeStackNavigationProp<AuthStackTypeRoutes>;
