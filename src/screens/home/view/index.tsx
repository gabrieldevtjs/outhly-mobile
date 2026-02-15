import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuthStore } from "../../../stores/auth";


const Home = () => {
  const { user, signOut } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, {user?.name} 👋</Text>
      <Text style={styles.subtitle}>Você está logado!</Text>

      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.6)",
  },
  button: {
    marginTop: 24,
    backgroundColor: "#BB44CF",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default Home;