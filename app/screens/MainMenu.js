import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";

import CardView from "../components/CardView";
import * as Linking from "expo-linking";

export default function MainMenu({ navigation }) {
  const [links, setLinks] = useState("");

  const handleOpenUrl = (url) => {
    _handleUrl(url);
  };

  const _handleUrl = (url) => {
    let { path, queryParams } = Linking.parse(url);
    if (path == "deeplinking") {
      navigation.navigate("DeepLinkingScreen");
    } else {
      navigation.navigate("MainMenu");
    }

    // alert(
    //   `Linked to app with path: ${path} and data: ${JSON.stringify(
    //     queryParams
    //   )}`
    // );
  };

  useEffect(() => {
    Linking.addEventListener("url", (e) => {
      let url = e.url;
      handleOpenUrl(url);
    });

    let redirectUrl = Linking.createURL("deeplinking", {
      queryParams: { hello: "world", goodbye: "now" },
    });

    setLinks(redirectUrl);

    Linking.getInitialURL().then((url) => {
      handleOpenUrl(url);
    });

    return () => {
      Linking.removeEventListener("url", (e) => {
        let url = e.url;
        handleOpenUrl(url);
      });
    };
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
        marginRight: 20,
      }}
    >
      <CardView
        navigation={navigation}
        title="Change Brightness Test"
        navigateTo="FirstScreen"
      />

      <CardView
        navigation={navigation}
        title="Deep Linking"
        navigateTo="DeepLinkingScreen"
      />

      <CardView
        navigation={navigation}
        title="Web View"
        navigateTo="WebViewScreen"
      />
      {/* <Text>{links}</Text> */}
    </SafeAreaView>
  );
}
