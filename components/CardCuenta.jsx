import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Coolors } from "../constants/colors";

function CardCuenta({ text, children, style, onPress,styleText}) {  
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.card, ...style}}
    >
      {children}
      <Text style={{...styles.textCard, ...styleText}}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    aspectRatio: 1,
    backgroundColor: Coolors.darkGreen,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    textTransform:"capitalize",
  },
  textCard: {
    color: Coolors.white,
    fontFamily:'PoppinsBold',
    fontSize: 20,
    textAlign: "center",
    textTransform:"capitalize"
  },
});

export default CardCuenta;
