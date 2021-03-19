import React from "react";
import {
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import { WebView } from "react-native-webview";

import { Ionicons } from "@expo/vector-icons";

export default function WebViewScreen({ navigation }) {
  const statusBarHeight = StatusBar.currentHeight;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? statusBarHeight : 0,
      }}
    >
      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
          width: 180,
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
      <WebView
        source={{ uri: "https://store.iloilosupermart.com" }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}
