import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Container from "./src/navigation/container";
import { useEffect } from "react";
import "./src/infrastructure/config/reactotron";

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Container />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
