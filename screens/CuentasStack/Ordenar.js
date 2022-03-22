import React, { useState, useEffect } from "react";
import { db } from "../../constants/Database";
import { collection, getDocs } from "firebase/firestore";
//colores
import { Coolors } from "../../constants/colors";
//componentes
import { StyleSheet, Text, FlatList } from "react-native";
import {
  Body,
  Button,
  CardCuenta,
  CardContent,
  If,
} from "../../components/index";
//funciones
import { numColumns, boxWidth } from "../../components/index";

export default function Ordenar({ navigation }) {
  const [ShowCards, setShowCards] = useState(true);
  const [ShowProducts, sEtShowProducts] = useState(false);
  const [grupos, setGrupos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  async function loadData() {
    try {
      const grupos = await getDocs(collection(db, "grupos"));
      setGrupos(grupos.docs);
      const productos = await getDocs(collection(db, "productos"));
      setProductos(productos.docs);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    loadData();
  }, []);

  const sortCategorias = (a, b) => {
    return a.data().NOMBRE.localeCompare(b.data().NOMBRE);
  };
  let categoriasOrden = grupos.sort(sortCategorias);
  let nomasLoQues = categoriasOrden.map(function Datos(element) {
    return element.data().NOMBRE;
  });
  const handleOpenProducts = (item) => {
    setShowCards(false);
    sEtShowProducts(true);
    console.log(item.data().NOMBRE);
    const filterProducts = productos.filter(function filtro(element) {
      if (item.data().NOMBRE === element.data().GRUPO) {
        return true;
      } else {
        return false;
      }
    });
    setProductosFiltrados(filterProducts)
  };

  const handleCloseProducts = () => {
    sEtShowProducts(false);
    setShowCards(true);
  };
  return (
    <Body>
      <CardContent style={{ maxHeight: "50%" }}>
        <If show={ShowCards}>
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            data={categoriasOrden}
            style={styles.flatList}
            horizontal={false}
            numColumns={numColumns()}
            renderItem={({ item }) => {
              return (
                <CardCuenta
                  text={item.data().NOMBRE}
                  style={{ height: boxWidth(20) }}
                  styleText={styles.cardText}
                  onPress={() => handleOpenProducts(item)}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </If>
        <If show={ShowProducts}>
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            data={productosFiltrados}
            style={styles.flatList}
            horizontal={false}
            numColumns={numColumns()}
            renderItem={({ item }) => {
              return (
                <CardCuenta
                  text={item.data().PRODUCTO}
                  style={{ height: boxWidth(20) }}
                  styleText={styles.cardText}
                  onPress={() => handleOpenProducts(item)}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
          <Button title={"regresar"} onPress={handleCloseProducts} />
        </If>
      </CardContent>
      <CardContent style={{ maxHeight: "20%" }}></CardContent>
      <Button title={"Enviar pedido"} />
    </Body>
  );
}
const styles = StyleSheet.create({
  cardText: {
    textTransform: "uppercase",
  },
  flatList: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "40%",
  },
  card: {
    aspectRatio: 1,
    backgroundColor: Coolors.darkGreen,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  fakebox: {
    backgroundColor: "transparent",
  },
});
