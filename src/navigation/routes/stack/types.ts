import { NavigatorScreenParams } from "@react-navigation/native"

export type SectionRoutesType = { 
	Senhas: undefined
}

export type HomeRoutesType = { 
	Home: undefined
}

export type RootRoutesTypes = {
  Home: NavigatorScreenParams<HomeRoutesType>
	Sections: NavigatorScreenParams<SectionRoutesType>
	splash: any
}

