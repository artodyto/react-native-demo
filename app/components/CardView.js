import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function CardView({ navigation, title, navigateTo }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        if (navigateTo != null) {
          navigation.navigate(navigateTo);
        }
      }}
    >
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2, // android
  },
  text: {
    fontWeight: "bold",
    color: "#4d5156",
  },
});
