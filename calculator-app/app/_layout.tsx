import React from "react";
import { Platform, View } from "react-native";

import * as NavigationBar from "expo-navigation-bar";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Colors } from "@/constants/theme";
import { globalStyles } from "@/styles/global-styles";

const isAndroid = Platform.OS === "android";

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("black");
}

const RootLayout = () => {
  return (
    <View style={globalStyles.background}>
      <Slot />

      <StatusBar style="light" backgroundColor={Colors.background} />
    </View>
  );
};

export default RootLayout;
