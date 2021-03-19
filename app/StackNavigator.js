import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Linking from "expo-linking";

// Screens
import FirstScreen from "./screens/FirstScreen";
import SecondScreen from "./screens/SecondScreen";
import MainMenu from "./screens/MainMenu";
import WebViewScreen from "./screens/WebViewScreen";
import DeepLinkingScreen from "./screens/DeepLinkingScreen";

const Stack = createStackNavigator();

// const config = {
//   screens: {
//     MainMenu: "mainmenu",
//     DeepLinkingScreen: "deeplinking",
//   },
// };

// const linking = {
//   prefixes: ["exp://expo.host/@ardyt/isapp_demo"],
//   config,
// };

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenBrightness">
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WebViewScreen"
          component={WebViewScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DeepLinkingScreen"
          component={DeepLinkingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
