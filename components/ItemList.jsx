import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Coolors } from "../constants/colors";

function ItemList({ col1, col2, col3, children, style, onPress, styleText }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.IntemContent, ...style }}>
      {children}
      <Text style={{ ...styles.textCard, ...styleText }}>{col1}</Text>
      <Text style={{ ...styles.textCard, ...styleText }}>{col2}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    IntemContent: {
    backgroundColor:Coolors.lightGray,
    width:'100%',
    textTransform: "capitalize",
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:'row',
    marginBottom:10,
    height:55,
    padding:10,
    borderRadius:10,
  },
  textCard: {
    color: Coolors.black,
    fontFamily: "Poppins",
    fontSize: 20,
    textAlign: "center",
    width:'50%',
    textTransform: "capitalize",
  },
});

export default ItemList;
