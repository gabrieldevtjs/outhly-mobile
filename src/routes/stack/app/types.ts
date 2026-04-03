import { NavigatorScreenParams } from "@react-navigation/native";

export type SectionRoutesType = {
  Senhas: undefined;
};

export type HomeRoutesType = {
  Home: undefined;
  Config: undefined;
};

export type ConfigRoutesType = {
  Config: undefined;
};

export type RootRoutesTypes = {
  Home: NavigatorScreenParams<HomeRoutesType>;
  Sections: NavigatorScreenParams<SectionRoutesType>;
  Config: NavigatorScreenParams<ConfigRoutesType>;
  splash: any;
};