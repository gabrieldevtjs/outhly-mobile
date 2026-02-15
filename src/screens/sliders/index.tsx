import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import Slider from "./components/slider";
import { SLIDERS_MESSAGE } from "./utils/constants";
import { useNavigation } from "@react-navigation/native";

const Sliders = () => {
  const swiperRef = useRef<Swiper>(null);
  const navigation = useNavigation<any>();

  const [currentIndex, setCurrentIndex] = useState(0);
  const isLastSlide = currentIndex === SLIDERS_MESSAGE.length - 1;

  const handleNext = () => {
    if (isLastSlide) {
      redirectLogin();
    } else {
      swiperRef.current?.scrollBy(1);
    }
  };

  const redirectLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={styles.pagination}
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {SLIDERS_MESSAGE.map((slide: any) => (
          <View key={slide.id} style={styles.slide}>
            <Slider
              image={{
                source: slide.lottie,
                height: slide.height,
                width: slide.width,
              }}
              title={slide.title}
              subtitle={slide.subtitle}
            />
          </View>
        ))}
      </Swiper>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleNext}
          style={{ backgroundColor: "#BB44CF", padding: 12, borderRadius: 12 }}
        >
          <Text style={styles.buttonText}>
            {isLastSlide ? "Começar" : "Próximo"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pagination: {
    bottom: 100,
  },
  dot: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
  },
  activeDot: {
    backgroundColor: "#FFFFFF",
    width: 24,
    height: 8,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
});

export default Sliders;