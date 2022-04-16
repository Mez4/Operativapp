import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Coolors } from "../constants/colors";
import store from "../store";
import { suma, resta, addItem } from "../store/actions/action.counters";
function Contador({ item, ...props }) {
  
  const isindex = (item) => {
    const arr =  store.getState().counter
   const index =  arr.findIndex(function(e){
      return e.id === item.id
    })
    return index
  }  
  const increment = (item) => {
    store.dispatch(suma(item))
  }
  const decrement = (item) => {
    store.dispatch(resta(item))
  }
  return (
    <View style={styles.ContadorButtonContainer}>
      <TouchableOpacity onPress={() => decrement(item)} style={styles.button}>
        <Text style={styles.buttonTittle}>-</Text>
      </TouchableOpacity>
      <Text style={styles.ContadorText}>
        {store.getState().counter[isindex(item)].value}
      </Text>
      <TouchableOpacity onPress={() => increment(item)} style={styles.button}>
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
