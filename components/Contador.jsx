import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Coolors } from "../constants/colors";                  
import CounterReducer from "../store/reducers/counter.reducer";
function Contador({ item, ...props }) {
  const resta = (item) => {           
    dispatch({type:"@counter/decremented"})
  };
  const suma = (item) => {
    dispatch({type:"@counter/incremented"})
  };
  return (
    <View style={styles.ContadorButtonContainer}>
      <TouchableOpacity onPress={()=> resta(item)} style={styles.button}>
        <Text style={styles.buttonTittle}>-</Text>
      </TouchableOpacity>
      <Text style={styles.ContadorText}>{counter}</Text>
      <TouchableOpacity onPress={()=> suma(item)} style={styles.button}>
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
