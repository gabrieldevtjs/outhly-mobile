import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={{ gap: 60 }}>
          <View style={styles.sectionContent}>
            <Text style={styles.title}>Login Here</Text>
            <Text style={styles.subtTitle}>
              Welcome back you've been missed
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.sectionButton}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleSignIn}
              style={[
                styles.buttonContainer,
                { backgroundColor: "#1F41BB", borderColor: "#1F41BB" },
              ]}
            >
              <Text style={[styles.button, { color: "#ffffff" }]}>Sign in</Text>
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
  inputContainer: {
    borderWidth: 1,

    width: "100%",
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: "#000",
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
    width: "100%",
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

export default LoginScreen;
