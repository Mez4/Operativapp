import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../constants/colors";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const numColumns = () => {
  let container = Math.floor(windowWidth - windowWidth * 0.1);
  let columns = Math.floor(container / 117);
  return columns;
};
const boxWidth = () => {
  let containerWidth = Math.floor(windowWidth - windowWidth * 0.1);
  let box = Math.floor(containerWidth / numColumns());
  let width = Math.floor(box - 10);
  if (numColumns() > 4) {
    width = width + 55;
  }
  return width;
};
function CardCuenta({ text, children, style, ...props }) {
  return (
    <TouchableOpacity
      {...props}
      style={{ ...styles.card, ...style, height: boxWidth() }}
    >
      {children}
      <Text style={styles.textCard}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    aspectRatio: 1,
    backgroundColor: Colors.darkGreen,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  textCard: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
    fontFamily: "PoppinsBold",
  },
});

export default CardCuenta;
