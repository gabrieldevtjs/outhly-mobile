import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { useRef } from "react";
import Slider from "./components/slider";
import { SLIDERS_MESSAGE } from "./utils/constants";

const Sliders = () => {
  const swiperRef = useRef<Swiper>(null);

  const handleNext = () => {
    swiperRef.current?.scrollBy(1);
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
        <TouchableOpacity style={styles.buttonNext} onPress={handleNext}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F41BB",
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
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  buttonNext: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 48,
    paddingVertical: 16,
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

export default Sliders;
