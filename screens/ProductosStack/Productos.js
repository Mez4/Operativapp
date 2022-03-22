//colores
import React, { useEffect, useState } from "react";
import { Coolors } from "../../constants/colors";
import { db } from "../../constants/Database";
import { collection, onSnapshot, getDocs,query } from "firebase/firestore";
//componentes
import {
  Body,
  Button,
  DiscretButton,
  Input,
  CardContent,
} from "../../components/index";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function Productos({ navigation }) {
  const [data, setData] = useState();
  const [rtData, setRTData] = useState([]);

  async function loadData() {
    try {
      const productos = await getDocs(collection(db, "productos"));
      setData(productos.docs);
    } catch (e) {
      console.log(e);
    }
  }

  async function loadRTData(){
    const q = query(collection(db,"productos"))
    const suscriber = onSnapshot(q,(querySnapshot) =>{
      const productos =[]
      querySnapshot.forEach(documentSnapshot => {
        productos.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id
        })
      });
      setRTData(productos)
    })
    return() => suscriber()
  }

  useEffect(() => {
    loadData();
    loadRTData();
  }, []);

  function renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.listItem}>
        <Text style={[styles.itemText, {width:'31%',}]}>{item.PRODUCTO}</Text>
        <Text style={[styles.itemText, {width:'20%',}]}>${item.PRECIO}</Text>
        <Text style={[styles.itemText, {width:'25%',}]}>{item.GRUPO}</Text>
        <Text style={[styles.itemText, {width:'24%',}]}>{item.AREA}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <Body>
      <CardContent style={{ maxHeight: "80%", padding: 15 }}>
        <FlatList
          data={rtData}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />
      </CardContent>
      <DiscretButton
        title={"Agregar producto"}
        style={{ marginVertical: 30 }}
        onPress={() => navigation.navigate("AgregarProducto")}
      />
    </Body>
  );
}
//////////
const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
    borderBottomColor: Coolors.lightGray,
    borderBottomWidth: 1,
    height:40,
  },
  itemText: {
    color: Coolors.black,
    fontSize: 16,
    fontFamily: "Poppins",
    textTransform: "capitalize",
    textAlign: "center",
  },
});
