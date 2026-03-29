import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuthStore } from "../../../common/stores/auth";
import { notify } from "@common/notify";
import { YStack, View } from "tamagui";

const CONFIG_ITEMS = [
  { label: "Perfil", section: true },
  { label: "Editar perfil" },
  { label: "Alterar senha master" },

  { label: "Segurança", section: true },
  { label: "Biometria" },
  { label: "Auto-lock" },

  { label: "Aparência", section: true },
  { label: "Tema" },

  { label: "Sobre", section: true },
  { label: "Versão do app" },
  { label: "Política de privacidade" },
];

const Config = () => {
  const navigation = useNavigation<any>();
  const { signOut } = useAuthStore();

  const logout = () => {
    (signOut(), navigation.redirect("Login"));
    notify("success", "Usuário Deslogado");
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {CONFIG_ITEMS.map((item, index) =>
          item.section ? (
            <Text key={index} style={styles.section}>
              {item.label}
            </Text>
          ) : (
            <TouchableOpacity key={index} style={styles.item}>
              <Text style={styles.itemText}>{item.label}</Text>
            </TouchableOpacity>
          ),
        )}
      </View>

      <View m="$sm" style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => logout()}>
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>
      </View>

      <YStack>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
      </YStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  menu: {
    flex: 1,
  },
  section: {
    color: "#888",
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 24,
    marginBottom: 4,
  },
  item: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
  },
  footer: {
    marginTop: "auto",
  },
  logoutButton: {
    backgroundColor: "#ff3b30",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Config;
