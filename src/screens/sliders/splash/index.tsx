import { View, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { authenticateWithBiometrics } from "@common/hooks/useBiometric";
import { useAuthStore } from "../../../common/stores/auth";

interface Props {
  onFinish: () => void;
}

const Splash = ({ onFinish }: Props) => {
  const imagePosition = useRef(new Animated.Value(0)).current;
  const handleAuth = async () => {
    const deviceToken = await authenticateWithBiometrics();

    if (!deviceToken) {
      useAuthStore.getState().signOut();
    }
    onFinish();
  };

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(imagePosition, {
        toValue: -150,
        duration: 800,
        useNativeDriver: true,
      }).start(() => handleAuth());
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("@assets/images/splash/splash-secondary.png")}
        style={[
          styles.productImage,
          { transform: [{ translateY: imagePosition }] },
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
});

export default Splash;
