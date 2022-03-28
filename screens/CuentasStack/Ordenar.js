import React, { useState, useEffect } from "react";
import { db } from "../../constants/Database";
import { collection, getDocs } from "firebase/firestore";
//colores
import { Coolors } from "../../constants/colors";
//componentes
import { StyleSheet, Text, FlatList, View } from "react-native";
import {
  Body,
  Button,
  CardCuenta,
  CardContent,
  If,
  ItemList,
  TextDescription,
  Contador,
} from "../../components/index";
//funciones
import { numColumns, boxWidth } from "../../components/index";
import { set } from "react-native-reanimated";
import store from "../../store";

export default function Ordenar({ navigation }) {
  const [ShowCards, setShowCards] = useState(true);
  const [ShowProducts, sEtShowProducts] = useState(false);
  const [grupos, setGrupos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [productoSelected, setProductoSelected] = useState();
  const [Pedido, setPedido] = useState([]);

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
  const handleOpenProducts = (item) => {
    setShowCards(false);
    sEtShowProducts(true);
    const filterProducts = productos.filter(function filtro(element) {
      if (
        item.data().NOMBRE === element.data().GRUPO &&
        element.data().AREA === "PALCOS"
      ) {
        return true;
      } else {
        return false;
      }
    });
    setProductosFiltrados(filterProducts);
  };
  const handleSelectProduct = (item) => {
    setProductoSelected(item);
    Pedido.push(item);
  };
  const log = () => {
    console.log(Pedido.map(item=>item.data().PRODUCTO))
    console.log(Contador.counter)
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
          <View style={styles.headerProducts}>
            <TextDescription text={"Producto"} />
            <TextDescription text={"Precio"} />
          </View>
          <FlatList
            data={productosFiltrados}
            renderItem={({ item }) => {
              return (
                <ItemList
                  col1={item.data().PRODUCTO}
                  col2={"$" + item.data().PRECIO}
                  onPress={() => handleSelectProduct(item)}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
          <Button
            style={styles.ButtonRegresar}
            title={"regresar"}
            onPress={handleCloseProducts}
          />
        </If>
      </CardContent>
      <CardContent style={{ maxHeight: "20%" }}>
        <FlatList
          data={Pedido}
          extraData={Pedido}
          renderItem={({ item }) => {
            if(item.id){

            }
            return (
              <View style={styles.ItemPedidoContainer}>
                <Text style={styles.ItemPedidoText}>
                  {item.data().PRODUCTO}
                </Text>
                <Contador item={item}/>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </CardContent>
      <Button title={"Enviar pedido"} onPress={log} />
      {/*() => navigation.navigate("Dashboard")*/}
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
  headerProducts: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ButtonRegresar: {
    marginTop: 25,
    alignSelf: "center",
    backgroundColor: Coolors.orage,
  },
  ItemPedidoContainer: {
    flexDirection:"row",
    marginBottom:5,
    alignItems:"center",
    justifyContent:"space-between",
  },
  ItemPedidoText: {
    fontFamily: "PoppinsBold",
    textTransform: "capitalize",
    fontSize:18,
    marginHorizontal:15,
  },
});
