//colores
import React, { useEffect, useState, useRef } from "react";
import { Coolors } from "../../constants/colors";
import { db } from "../../constants/Database";
import { collection, getDocs, setDoc, doc, } from "firebase/firestore";
import { Picker } from "@react-native-picker/picker";
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
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function AgregarProducto({ navigation }) {
  const [grupos, setGrupos] = useState([]);
  const [areas, setAreas] = useState([]);

  const [grupoSlected, setGrupoSelected] = useState();
  const [areaSlected, setAreaSelected] = useState();
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");

  async function loadData() {
    try {
      const grupos = await getDocs(collection(db, "grupos"));
      setGrupos(grupos.docs);
      const areas = await getDocs(collection(db, "areas"));
      setAreas(areas.docs);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    loadData();
  }, []);
  function subirProducto() {
    const tabla = doc(db, "productos", Math.random().toString());
    const docData = {
      AREA: areaSlected,
      GRUPO: grupoSlected,
      PRECIO: parseInt(precio),
      PRODUCTO: producto,
    };
    try {
      setDoc(tabla, docData);
    } catch (e) {
      console.log(e);
    } finally {
      navigation.navigate("Productos");
    }
  }
  return (
    <Body>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Body>
          <Input
            style={styles.input}
            placeholder={"Producto"}
            onChangeText={(text) => setProducto(text)}
          />
          <Input
            style={styles.input}
            placeholder={"Precio"}
            keyboardType="numeric"
            onChangeText={(precio) => setPrecio(precio)}
          />
          <View style={styles.encabezados}>
            <Text style={styles.encabezadosText}>GRUPO</Text>
            <Text style={styles.encabezadosText}>AREA</Text>
          </View>
          <View style={styles.containerPicker}>
            <Picker
              selectedValue={grupoSlected}
              itemStyle={{ fontSize: 14 }}
              onValueChange={(itemValue, itemIndex) =>
                setGrupoSelected(itemValue)
              }
              mode={"dropdown"}
              style={styles.picker}
            >
              {grupos.map((item, index) => {
                return (
                  <Picker.Item
                    label={item.data().NOMBRE}
                    value={item.data().NOMBRE}
                    key={item.id}
                  />
                );
              })}
            </Picker>
            <Picker
              selectedValue={areaSlected}
              onValueChange={(itemValue, itemIndex) =>
                setAreaSelected(itemValue)
              }
              mode={"dropdown"}
              style={styles.picker}
              itemStyle={{ fontSize: 14 }}
            >
              {areas.map((item, index) => {
                return (
                  <Picker.Item
                    label={item.data().NOMBRE}
                    value={item.data().NOMBRE}
                    key={item.id}
                  />
                );
              })}
            </Picker>
          </View>
          <Button
            title={"Agregar"}
            style={{ backgroundColor: Coolors.blue, marginBottom: 15 }}
            onPress={() => subirProducto()}
          />
          <Button
            title={"Cancelar"}
            style={{ backgroundColor: Coolors.red }}
            onPress={() => navigation.navigate("Productos")}
          />
        </Body>
      </TouchableWithoutFeedback>
    </Body>
  );
}
////////// () => navigation.navigate("AgregarProducto")
const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
  },
  encabezados: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  encabezadosText: {
    fontFamily: "PoppinsBold",
    fontSize: 18,
  },
  containerPicker: {
    height: 220,
    width: "90%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  picker: {
    width: "50%",
    textTransform: "capitalize",
    fontSize: 10,
  },
  pickerItem: {
    fontFamily: "Poppins",
    textTransform: "capitalize",
    backgroundColor: Coolors.lightGreen,
  },
});
