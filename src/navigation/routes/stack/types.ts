import { NavigatorScreenParams } from "@react-navigation/native"
import { AppRoutesTypes } from "./home/types"
import { SectionRoutesTypes } from "./sections/types"

export type RootRoutesTypes = {
  App: NavigatorScreenParams<AppRoutesTypes>
  Sections: NavigatorScreenParams<SectionRoutesTypes>
}