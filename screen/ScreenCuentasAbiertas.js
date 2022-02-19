import React from "react";
import { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
//Componentes
import { Colors } from "../constants/colors";
import Body from "../components/Body";
import Button from "../components/Button";
import CardCuenta from "../components/CardCuenta";
import Input from "../components/Input";
import CrearCuentasSvg from "../assets/svg/crearCuenta.svg";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";


export default function ScreenCuentasAbiertas({onAccountSelected}) {
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [itemList, setItemList] = useState([]);
  if (!loaded) return <AppLoading />;
  const windowWidth = Dimensions.get("window").width;
  const boxWidth = () => {
    let containerWidth = Math.floor(windowWidth - windowWidth * 0.1);
    let box = Math.floor(containerWidth / numColumns());
    let width = Math.floor(box - 10);
    if (numColumns() > 4) {
      width = width + 55;
    }
    return width;
  };
  const handleOnAdd = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const handleOnChangeText = (text) => {
    setTextInput(text);
  };
  const addFakebox = () => {
    const cols = numColumns();
    const fullRows = Math.floor(itemList.length / cols);
    let ElementsLastRow = itemList.length - fullRows * cols;
    while (ElementsLastRow !== cols && ElementsLastRow !== 0) {
      itemList.push({
        value: "estoy vacio estoy vacio estoy",
        empty: true,
        id: Math.random().toString(),
      });
      ElementsLastRow = ElementsLastRow + 1;
    }
  };
  const deleteFakebox = () => {
    while (itemList.some((item) => item.empty === true)) {
      itemList.forEach(function (item, index, arr) {
        if (item.empty === true) {
          itemList.splice(index, 1);
        }
      });
    }
    addFakebox();
  };
  const formatData = (data) => {
    deleteFakebox();
    return data;
  };
  const handleConfirmAdd = () => {
    itemList.push({
      id: Math.random().toString(),
      value: textInput,
      empty: false,
    });
    formatData();
    setTextInput("");
    setModalVisible(false);
  };
  const numColumns = () => {
    let container = Math.floor(windowWidth - windowWidth * 0.1);
    let columns = Math.floor(container / 117);
    if (columns > 4) return 4;
    return columns;
  };

  const handleOnSelected = (item) => {
    onAccountSelected(item)     
  }

  return (
    <Body>
      <View style={styles.container}>
        <FlatList
          data={itemList}
          style={styles.flatList}
          contentContainerStyle={{ flexGrow: 1 }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          horizontal={false}
          numColumns={numColumns()}
          renderItem={({ item }) => {
            if (item.empty === true) {
              return (
                <View
                  style={[styles.card, styles.fakebox, { height: boxWidth() }]}
                ></View>
              );
            }
            return <CardCuenta onPress={handleOnSelected(item.value)} text={item.value}/>
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Button onPress={(handleOnAdd)} title={"Nueva cuenta"} />
      {/* -------------------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------- */}
      <Modal animationType="slide" visible={modalVisible}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>        
        <View style={styles.modalContainer}>
          <Text style={styles.tittleModal}>Crear cuenta</Text>
          <Text style={styles.paragraphModal}>
            Registra los datos de tu cliente para poder atenderlo.
          </Text>
          <CrearCuentasSvg style={styles.image} width={"60%"} height={"30%"} />
          <Input
            placeholder={"nombre del cliente"}
            value={textInput}
            onChangeText={handleOnChangeText}
          />
          <Button
            onPress={handleConfirmAdd}
            title={"Crear nueva cuenta"}
            style={styles.buttonAdd}
          />
          <Button onPress={closeModal} title={"x"} style={styles.closeModal} />
        </View>
        </TouchableWithoutFeedback>
      </Modal>
    </Body>
  );
}
//////////
const styles = StyleSheet.create({
  container: {
    width: "90%",
    maxHeight: "60%",
    marginTop: 65,
    justifyContent: "space-between",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  flatList: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
  },
  card: {
    aspectRatio: 1,
    backgroundColor: Colors.darkGreen,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  fakebox: {
    backgroundColor: "transparent",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightGray,
  },
  tittleModal: {
    fontSize: 30,
    color: Colors.titleCardColor,
    fontFamily: "PoppinsBold",
    marginTop: 50,
  },
  paragraphModal: {
    fontSize: 18,
    color: Colors.textCardColor,
    width: "60%",
    textAlign: "center",
    lineHeight: 25,
    fontFamily: "Poppins",
    marginBottom: 10,
  },
  closeModal: {
    width: 45,
    backgroundColor: "#ccc",
    margin: 0,
  },
  buttonAdd: {
    marginBottom: 20,
  },
});
