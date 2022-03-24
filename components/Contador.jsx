import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Coolors } from "../constants/colors";
import { Button } from "../components/Button";
import { useState } from "react";

function Contador({ onPressLess, ...props }) {
  const [Cantidad, setCantidad] = useState(1);
  const resta = () => {
    setCantidad(Cantidad - 1);
  };
  const suma = () => {
    setCantidad(Cantidad + 1);
  };

  return (
    <View style={styles.ContadorButtonContainer}>
      <TouchableOpacity onPress={resta} style={styles.button}>
        <Text style={styles.buttonTittle}>-</Text>
      </TouchableOpacity>
      <Text style={styles.ContadorText}>{Cantidad}</Text>
      <TouchableOpacity onPress={suma} style={styles.button}>
        <Text style={styles.buttonTittle}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ContadorText: {
    fontFamily: "PoppinsBold",
    textTransform: "capitalize",
    fontSize: 18,
    marginHorizontal: 5,
    width: 25,
    textAlign: "center",
  },
  ContadorButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ccc",
    borderRadius: 10,
  },
  button: {
    backgroundColor: Coolors.lightGreen,
    height: 40,
    width: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTittle: {
    color: Coolors.white,
    textAlign: "center",
    fontSize: 25,
    fontFamily: "PoppinsBold",
  },
});

export default Contador;
