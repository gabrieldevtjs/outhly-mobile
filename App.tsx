import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Container from "./src/navigation/container";

export default function App() {
  return (
    <View style={styles.container}>
      <Container />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
