import { View, Text, StyleSheet } from "react-native";

import LottieView from "lottie-react-native";

type SliderProps = {
  image: {
    source: any;
    width: number;
    height: number;
  };
  title: string;
  subtitle: string;
};

const Slider = ({
  image: { source, width = 300, height = 300 },
  title,
  subtitle,
}: SliderProps) => {
  return (
    <View style={styles.section}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <LottieView
          source={source}
          autoPlay
          loop
          style={[styles.lottie, { width, height }]}
        />
      </View>
      <View>
        <View style={styles.sectionContent}>
          <Text style={styles.title}>{title} </Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 90,
    maxHeight: "auto"
  },
  lottie: {
    height: 300,
    marginBottom: 32,
  },
  sectionContent: {
    gap: 12,
    alignItems: "center",
    paddingHorizontal: 2,
    marginBottom: 40,
  },
  title: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 28,
    color: "#FFFFFF",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#E0E0E0",
    fontWeight: "500",
    lineHeight: 24,
  },
  buttonNext: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 48,
    paddingVertical: 16,
    minWidth: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    color: "#1F41BB",
  },
});

export default Slider;
