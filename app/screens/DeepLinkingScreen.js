import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Clipboard from "expo-clipboard";
import Toast from "react-native-toast-message";

export default function DeepLinkingScreen({ navigation }) {
  const [copiedText, setCopiedText] = React.useState("");

  const copyToClipboard = (type) => {
    if (type == "expogo") {
      Clipboard.setString("exp://exp.host/@ardyt/isapp_demo/--/deeplinking");
    }

    if (type == "standalone") {
      Clipboard.setString("isappdemo://@ardyt/deeplinking");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={styles.text}>Deep Linking Screen</Text>

      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
          width: 180,
          marginTop: 20,
          alignSelf: "center",
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

      <View
        style={{
          padding: 10,
          margin: 10,
          borderRadius: 8,
        }}
      >
        <Text>To open this screen using a link.</Text>
        <View style={{ marginTop: 16 }}>
          <Text>using expo go:</Text>
        </View>
        <TouchableOpacity
          style={{
            fontWeight: "bold",
            marginTop: 6,
            padding: 10,
            backgroundColor: "#ced6e0",
            borderRadius: 6,
            width: "100%",
          }}
          onPress={() => {
            copyToClipboard("expogo");
            Toast.show({
              type: "info",
              text1: "Text copied to clipboard.",
              position: "bottom",
              visibilityTime: 3000,
            });
          }}
        >
          <Text style={{ color: "#202124" }}>
            exp://exp.host/@ardyt/isapp_demo/--/deeplinking
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", marginTop: 16, flexWrap: "wrap" }}>
          <Text>using a standalone app:</Text>
          <TouchableOpacity
            style={{
              fontWeight: "bold",
              marginTop: 6,
              padding: 10,
              backgroundColor: "#ced6e0",
              borderRadius: 6,
              width: "100%",
            }}
            onPress={() => {
              copyToClipboard("standalone");
              Toast.show({
                type: "info",
                text1: "Text copied to clipboard.",
                position: "bottom",
                visibilityTime: 2000,
              });
            }}
          >
            <Text style={{ color: "#202124" }}>
              isappdemo://@ardyt/deeplinking
            </Text>
          </TouchableOpacity>
          {/* <Text style={{ fontWeight: "bold", marginLeft: 6 }}>
            isappdemo://@ardyt/deeplinking
          </Text> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
