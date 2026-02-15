import { View, Text, Image, StyleSheet, Animated } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";

const Splash = () => {
  const navigation = useNavigation<any>();
  const imagePosition = useRef(new Animated.Value(0)).current;
  const [showAuth, setShowAuth] = useState(false);

  const redirectLogin = () => {
    navigation.navigate("Login");
  };

  const authenticate = async () => {
    try {
      // Verifica se o dispositivo suporta biometria
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (hasHardware && isEnrolled) {
        const result = await LocalAuthentication.authenticateAsync({
          promptMessage: "Autentique-se para continuar",
          fallbackLabel: "Usar senha",
          cancelLabel: "Cancelar",
        });

        if (result.success) {
          redirectLogin();
        } else {
          // Se falhar, redireciona mesmo assim após 2 segundos
          setTimeout(redirectLogin, 2000);
        }
      } else {
        // Se não tiver biometria, redireciona direto
        redirectLogin();
      }
    } catch (error) {
      console.error(error);
      redirectLogin();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(imagePosition, {
          toValue: -150,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowAuth(true);
        authenticate();
      });
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("@assets/images/splash/splash-secondary.png")}
        style={[
          styles.productImage,
          {
            transform: [{ translateY: imagePosition }],
          },
        ]}
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
  productImage: {
    width: 180,
    height: 180,
  },
  authContainer: {
    position: "absolute",
    alignItems: "center",
  },
  authText: {
    fontSize: 60,
    marginBottom: 10,
  },
  authLabel: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Splash;
