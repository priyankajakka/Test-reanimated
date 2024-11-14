import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function App() {
  const sampleImages = [
    "https://picsum.photos/id/237/400/200",
    "https://picsum.photos/id/238/400/200",
    "https://picsum.photos/id/239/400/200",
    "https://picsum.photos/id/240/400/200",
    "https://picsum.photos/id/241/400/200",
    "https://picsum.photos/id/237/400/200",
    "https://picsum.photos/id/238/400/200",
    "https://picsum.photos/id/239/400/200",
    "https://picsum.photos/id/240/400/200",
    "https://picsum.photos/id/241/400/200",
  ];

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Carousel
        style={{ borderWidth: 2 }}
        loop
        width={400}
        height={460}
        data={sampleImages}
        renderItem={({ item }) => (
          <View
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              marginHorizontal: 32,
            }}
          >
            <Image
              source={{ uri: item }}
              resizeMode={"cover"}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        )}
        scrollAnimationDuration={500}
        snapEnabled
        pagingEnabled
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1.0,
          parallaxScrollingOffset: 45,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 200
  },
});
