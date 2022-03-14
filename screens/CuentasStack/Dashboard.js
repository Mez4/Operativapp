//colores
import { Coolors } from "../../constants/colors";
//componentes
import React, { useState } from "react";
import {Body, Button, CardCuenta, Input, Title, TextDescription} from "../../components/index"
import {StyleSheet, Text, View, FlatList, Modal, TouchableWithoutFeedback, Keyboard,} from "react-native";
//funciones
import { numColumns, boxWidth, deleteFakebox, formatData} from "../../components/index"
//svg
import CrearCuentasSvg from "../../assets/svg/crearCuenta.svg";

export default function Dashboard({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [itemList, setItemList] = useState([
    {
      value: "Sheccid",
      empty: false,
      id: Math.random().toString(),
    },
    {
      value: "Palco 10",
      empty: false,
      id: Math.random().toString(),
    },
    {
      value: "Palco 5",
      empty: false,
      id: Math.random().toString(),
    },
    {
      value: "palco 7",
      empty: false,
      id: Math.random().toString(),
    },
  ]);
  const handleOnAdd = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    deleteFakebox()
    setModalVisible(false);
  };
  const handleOnChangeText = (text) => {
    setTextInput(text);
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
  const addFakebox = () => {
    const cols = numColumns();
    const fullRows = Math.floor(itemList.length / cols);
    let ElementsLastRow = itemList.length - fullRows * cols;
    while (ElementsLastRow !== cols && ElementsLastRow !== 0) {
      itemList.push({
        value: "",
        empty: true,
        id: Math.random().toString(),
      });
      ElementsLastRow = ElementsLastRow + 1;
    }
  }; 
  const deleteFakebox = () => {
    while (itemList.some((item) => item.empty === true)) {
      itemList.forEach(function (item, index, itemList) {
        if (item.empty === true) {
          itemList.splice(index, 1);
        }
      });
    }
    addFakebox(itemList);
  };

  const formatData = (data) => {
    deleteFakebox(data);
    return data;
  };

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
                  style={[styles.card, styles.fakebox, { height: boxWidth(10) }]}
                ></View>
              );
            }''
            return <CardCuenta 
                    onPress={() => navigation.navigate('Cuenta', item)} 
                    text={item.value} 
                    style={{height: boxWidth(10)}}/>
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
          <Title text={'Crear cuenta'}/>
          <TextDescription 
          style={styles.paragraphModal}
          text={"Registra los datos de tu cliente para poder atenderlo."}
          />
          <CrearCuentasSvg style={styles.image} width={"60%"} height={"30%"} />
          <Input
            placeholder={"nombre del cliente"}
            value={textInput}
            onChangeText={handleOnChangeText}
            style={styles.inputNombre}
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
    backgroundColor: Coolors.darkGreen,
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
    backgroundColor: Coolors.lightGray,
  },
  
  paragraphModal: {
    width: "60%",
    lineHeight: 25,
    marginBottom: 10,
  },
  closeModal: {
    width: 45,
    backgroundColor: "#ccc",
    margin: 0,
  },
  inputNombre:{
    marginBottom:30,
    marginTop:70,
  },
  buttonAdd: {
    marginBottom: 20,
  },
});
