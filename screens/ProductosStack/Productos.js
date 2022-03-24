//colores
import React, { useEffect, useState } from "react";
import { Coolors } from "../../constants/colors";
import { db } from "../../constants/Database";
import { collection, onSnapshot, getDocs, query, doc, deleteDoc } from "firebase/firestore";
//componentes
import {
  Body,
  DiscretButton,
  CardContent,
  TextDescription,
  Title,
  Button,
  Input,
} from "../../components/index";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";

export default function Productos({ navigation }) {
  const [data, setData] = useState();
  const [rtData, setRTData] = useState([]);
  const [ItemSelected, setItemSelected] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  async function loadData() {
    try {
      const productos = await getDocs(collection(db, "productos"));
      setData(productos.docs);
    } catch (e) {
      console.log(e);
    }
  }

  async function loadRTData() {
    const q = query(collection(db, "productos"));
    const suscriber = onSnapshot(q, (querySnapshot) => {
      const productos = [];
      querySnapshot.forEach((documentSnapshot) => {
        productos.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      setRTData(productos);
    });
    return () => suscriber();
  }

  useEffect(() => {
    loadData();
    loadRTData();
  }, []);

  const sortProductos = (a, b) => {
    return a.GRUPO.localeCompare(b.GRUPO);
  };
  const productosOrden = rtData.sort(sortProductos);
  const productOptions = (item) => {
    setItemSelected(item);
    setModalVisible(true);
  };

  const DeleteDoc = (item) => {
    const docSelected = doc(db, 'productos', item.key)
    deleteDoc(docSelected)
    .then(()=>{
      alert('borrado exitosamente')
    })
    .catch((error)=>{
      alert(error.message)
    })
    setModalVisible(false)
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => productOptions(item)}
      >
        <Text style={[styles.itemText, { width: "31%" }]}>{item.PRODUCTO}</Text>
        <Text style={[styles.itemText, { width: "20%" }]}>${item.PRECIO}</Text>
        <Text style={[styles.itemText, { width: "25%" }]}>{item.GRUPO}</Text>
        <Text style={[styles.itemText, { width: "24%" }]}>{item.AREA}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <Body>
      <CardContent style={{ maxHeight: "80%", padding: 15 }}>
        <View style={styles.headerProducts}>
          <TextDescription text={"Producto"} />
          <TextDescription text={"Precio"} />
          <TextDescription text={"Grupo"} />
          <TextDescription text={"Area"} />
        </View>
        <FlatList
          data={productosOrden}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />
      </CardContent>
      <DiscretButton
        title={"Agregar producto"}
        style={{ marginVertical: 30 }}
        onPress={() => navigation.navigate("AgregarProducto")}
      />
      <Modal animationType="slide" visible={modalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Coolors.lightGray,
          }}
        >
          <Title text={"¿Desea eliminar el producto?"} style={{marginBottom:40,}}/>
          <TextDescription text={"NOMBRE: " + ItemSelected.PRODUCTO} />
          <TextDescription text={"PRECIO: $" + ItemSelected.PRECIO} />
          <TextDescription text={"GRUPO: " + ItemSelected.GRUPO} />
          <TextDescription text={"AREA: " + ItemSelected.AREA} style={{marginBottom:40,}}/>
          <Button
            title={"Borrar"}
            style={{ backgroundColor: Coolors.red, marginBottom:20,}}
            onPress={() => DeleteDoc(ItemSelected)}
          />
          <Button title={"regresar"} onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </Body>
  );
}
//////////
const styles = StyleSheet.create({
  headerProducts: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: Coolors.textCardColor,
    borderBottomWidth: 1,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: Coolors.lightGray,
    borderBottomWidth: 1,
    height: 40,
  },
  itemText: {
    color: Coolors.black,
    fontSize: 16,
    fontFamily: "Poppins",
    textTransform: "capitalize",
    textAlign: "center",
  },
});
