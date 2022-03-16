//colores
import React, { useEffect, useState } from "react";
import { Coolors } from "../../constants/colors";
import { db } from "../../constants/Database";
import { collection, getDocs } from "firebase/firestore";
//componentes
import {
  Body,
  Button,
  DiscretButton,
  Input,
  CardContent,
} from "../../components/index";
import { View, StyleSheet, Text, FlatList, Modal } from "react-native";

export default function Productos({ navigation }) {
  const [data, setData] = useState();
  
  async function loadData() {
    try {
      const productos = await getDocs(collection(db, "productos"));
      setData(productos.docs);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    loadData();
  }, []);

  function renderItem({ item }) {
    return (
      <View style={styles.listItem}>
        <Text style={styles.itemText}>{item.data().PRODUCTO}</Text>
        <Text style={styles.itemText}>${item.data().PRECIO}</Text>
        <Text style={styles.itemText}>{item.data().GRUPO}</Text>
        <Text style={styles.itemText}>{item.data().AREA}</Text>
        <View style={styles.buttonContainer}>
          <Button title={"editar"} style={styles.button} />
          <Button title={"borrar"} style={styles.button} />
        </View>
      </View>
    );
  }

  return (
    <Body>
      <CardContent>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </CardContent>
      <DiscretButton
        title={"Agregar producto"}
        onPress={() => navigation.navigate("AgregarProducto")}
      />
    </Body>
  );
}
//////////
const styles = StyleSheet.create({
  button: {
    width: 45,
    backgroundColor: "#ccc",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: Coolors.black,
    fontSize: 18,
    fontFamily: "Poppins",
    textTransform: "capitalize",
    textAlign: "center",
    width: "21%",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "red",
    width: "15%",
    justifyContent: "space-between",
  },
});
