import React from "react";
import "react-native-gesture-handler"
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import MainNavigator from "./navigation/index";

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
  });
  if (!loaded) return <AppLoading />;
  return (
      <MainNavigator/>
  );
}