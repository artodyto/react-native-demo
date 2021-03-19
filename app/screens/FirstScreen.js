import React, { useEffect, useState } from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";

import * as Brightness from "expo-brightness";
import { Ionicons } from "@expo/vector-icons";

export default function FirstScreen({ navigation }) {
  const [defaultBrightness, setDefaultBrightness] = useState(0);

  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === "granted") {
        const currentBrightness = await Brightness.getBrightnessAsync();
        if (currentBrightness != null) {
          setDefaultBrightness(currentBrightness);
        }
      }
    })();
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <TouchableOpacity
        onPress={async () => {
          navigation.navigate("SecondScreen", {
            brightness: defaultBrightness,
          });
        }}
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 5,
          width: 180,
        }}
      >
        <Text
          style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
        >
          go to second screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
          width: 180,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate("MainMenu")}
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color="#4d5156"
          style={{ justifyContent: "space-between" }}
        />
        <Text
          style={{ color: "#4d5156", fontWeight: "bold", textAlign: "center" }}
        >
          back to main menu
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
