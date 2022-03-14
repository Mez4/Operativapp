import React from "react";
//colores
import { Coolors } from "../../constants/colors";
//componentes
import { StyleSheet, Text, FlatList} from "react-native";
import {Body, Button, CardCuenta, CardContent} from "../../components/index"
//funciones
import { numColumns, boxWidth,} from "../../components/index"

  export default function Ordenar({navigation}) {
    const categorias = [
      {
        value:'cerveza',
        empty: false,
        id: Math.random().toString(),
      },
      {
        value:'litros vino',
        empty: false,
        id: Math.random().toString(),
      },
      {
        value:'servicios',
        empty: false,
        id: Math.random().toString(),
      },
      {
        value:'refresco',
        empty: false,
        id: Math.random().toString(),
      },
      {
        value:'bebidas',
        empty: false,
        id: Math.random().toString(),
      },]
      const sortCategorias = (a,b) => {
        return a.value.localeCompare(b.value);
      }
      let categoriasOrden = categorias.sort(sortCategorias)
    return (
    <Body>
        <CardContent>
        <FlatList
          data={categoriasOrden}
          style={styles.flatList}
          contentContainerStyle={{ flexGrow: 1 }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          horizontal={false}
          numColumns={numColumns()}
          renderItem={({ item }) => {
            if (item.empty === true) {
              return (
                <View
                  style={[styles.card, styles.fakebox, { height: boxWidth(20) }]}
                ></View>
              );
            }
            return <CardCuenta text={item.value} style={{height: boxWidth(20)}} styleText={styles.cardText}/>
          }}
          keyExtractor={(item) => item.id}
        />
        </CardContent>
        <CardContent></CardContent>
        <Button title={'Enviar pedido'} onPress={() => navigation.goBack()}/>
    </Body>
  );
}
const styles = StyleSheet.create({
  cardText:{
    textTransform:"uppercase",
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