import React, { useState } from "react";
import {
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
} from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";

export default function WebViewScreen({ navigation }) {
  const statusBarHeight = StatusBar.currentHeight;
  const [webViewLoaded, setWebViewLoaded] = useState(false);

  const ActivityIndicatorElement = () => {
    //making a view to show to while loading the webpage
    return (
      <ActivityIndicator
        color="#009688"
        size="large"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    );
  };

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
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <WebView
          source={{ uri: "https://store.iloilosupermart.com" }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
      </View>
    </SafeAreaView>
  );
}
