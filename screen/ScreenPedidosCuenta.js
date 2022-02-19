import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ScreenPedidosCuenta({accountTag}) {
  return (
   <View>
       <Text>Hola {accountTag}</Text>
   </View>
  );
}
//////////
const styles = StyleSheet.create({
  
});
