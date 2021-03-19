import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DeepLinkingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Deep Linking Screen</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({});
