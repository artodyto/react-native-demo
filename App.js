import React from "react";
import { StyleSheet } from "react-native";

import StackNavigator from "./app/StackNavigator";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <StackNavigator />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}
