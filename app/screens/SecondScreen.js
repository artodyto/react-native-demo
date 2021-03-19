import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as Brightness from "expo-brightness";

export default function SecondScreen({ route, navigation }) {
  const { brightness } = route.params;

  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === "granted") {
        await Brightness.setBrightnessAsync(1).catch((e) => console.log(e));
      }
    })();
  }, []);

  const setBrightness = async () => {
    const { status } = await Brightness.requestPermissionsAsync();
    if (status === "granted") {
      await Brightness.setBrightnessAsync(brightness);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={async () => {
          setBrightness();
          navigation.navigate("FirstScreen");
        }}
        style={{ backgroundColor: "red", padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          go to first screen
        </Text>
      </TouchableOpacity>
    </View>
  );
}
