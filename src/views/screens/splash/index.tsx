import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation<any>();

  const redirectLogin = () => {
    navigation.navigate("sliders");
  };

	setTimeout(() => {
		redirectLogin()
	}, 5000);
  return (
    <View style={styles.container}>
      <Image
        source={require("@assets/images/splash/splash-secondary.png")}
        style={styles.productImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BB44CF",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
  },
  productImage: {
    width: 180,
    height: 180,
  },
});
export default Splash;
