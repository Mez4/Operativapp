import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CuentasNavigator from "./navigation/CuentasNavigator";
import "react-native-gesture-handler"
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
  });
  if (!loaded) return <AppLoading />;
  return (
      <CuentasNavigator/>
  );
}
//////////
const styles = StyleSheet.create({
  
});