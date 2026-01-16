import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const AuthScreen = () => {
  const navigation = useNavigation<any>();

  const redirectLogin = () => {
    navigation.navigate("Login");
  };
  
    const redireactLogin = () => {
    navigation.navigate("Login");
  };
//aaaaaa
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image
          source={require("@assets/semfundo.png")}
          style={styles.productImage}
          resizeMode="cover"
        />
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 60 }}
        >
          <View style={styles.sectionContent}>
            <Text style={styles.title}>
              Login Securely to Unlock Your Future
            </Text>
            <Text style={styles.subtTitle}>
              Explore all existing job roles based on your interest and study
              major
            </Text>
          </View>

          <View style={styles.sectionButton}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => redirectLogin()}
              style={[
                styles.buttonContainer,
                { backgroundColor: "#1F41BB", borderColor: "#1F41BB" },
              ]}
            >
              <Text style={[styles.button, { color: "#ffffff" }]}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => null}
              style={styles.buttonContainer}
            >
              <Text style={[styles.button, { color: "#5d5d5dff" }]}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productImage: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  sectionContent: {
    gap: 12,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  sectionButton: {
    flexDirection: "row",
    paddingHorizontal: 26,
    gap: 20,
  },
  buttonContainer: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 26,
    paddingVertical: 12,
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 28,
    color: "#1F41BB",
  },
  subtTitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
  },
  button: {
    fontWeight: "700",
    textAlign: "center",
  },
});

export default AuthScreen;
