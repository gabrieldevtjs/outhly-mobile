import { NavigatorScreenParams } from "@react-navigation/native"
import { HomeRoutesType } from "./home/types"
import { SectionRoutesType } from "./sections/types"

export type RootRoutesTypes = {
  Home: NavigatorScreenParams<HomeRoutesType>
  Sections: NavigatorScreenParams<SectionRoutesType>
}