import React from "react";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Colors } from "../constants/colors";

function Input({ placeholder, style, value, onChange, ...props }) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      placeholderTextColor={Colors.textInput}
      style={{ ...styles.Input, ...style }}
      {...props}
    ></TextInput>
  );
}
const styles = StyleSheet.create({
  Input: {
    backgroundColor: Colors.white,
    color: Colors.black,
    width: "90%",
    height: 43,
    paddingLeft: 10,
    fontFamily: "PoppinsBold",
    borderRadius: 5,
    marginBottom: 50,
    marginTop:30,
    fontSize: 17,
  },
});
export default Input;
