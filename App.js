import React from "react";
import { LogBox } from 'react-native';
import "react-native-gesture-handler"
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import MainNavigator from "./navigation/index";
export default function App() {
  LogBox.ignoreLogs(['Setting a timer for a long period of time'])
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
  });
  if (!loaded) return <AppLoading />;
  return (
      <MainNavigator/>
  );
}