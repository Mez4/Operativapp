import React, { useState } from "react";
//colores
import { Coolors } from "../../constants/colors";
//componentes
import {
  Body,
  Button,
  CardContent,
  Input,
  Title,
  DiscretButton,
} from "../../components/index";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function CerrarCuenta({ navigation, route }) {
  const total = 4000;
  const [textInput, setTextInput] = useState();
  const [textEfectivo, setTextEfectivo] = useState(0.0);
  const [textTdc, setTextTdc] = useState(0.0);
  const [textCortesia, setTextCortesia] = useState(0.0);
  const [textSaldo, setTextSaldo] = useState(total);
  const handleOnChangeText = (text) => {
    setTextInput(text);
  };
  const handleOnSetEfectivo = (text) => {
    if (Number.isNaN(parseFloat(textInput)) === true|| textInput === undefined) {
      Alert.alert("Cantidad invalida", "agrega una cantidad.");
    } else {
      setTextEfectivo(
        parseFloat(parseFloat(textEfectivo) + parseFloat(textInput))
      );
      setTextInput();
      setTextSaldo(textSaldo - textInput);
    }
    console.log(typeof(textInput))
    console.log(textInput)
  };
  const handleOnSetTdc = (text) => {
    if (Number.isNaN(parseFloat(textInput)) === true|| textInput === undefined) {
      Alert.alert("Cantidad invalida", "agrega una cantidad.");
    } else {
      setTextTdc(
        parseFloat(parseFloat(textTdc) + parseFloat(textInput))
      );
      setTextInput();
      setTextSaldo(textSaldo - textInput);
    }
  };
  const handleOnSetCortesia = (text) => {
    if (Number.isNaN(parseFloat(textInput)) === true|| textInput === undefined) {
      Alert.alert("Cantidad invalida", "agrega una cantidad.");
    } else {
      setTextCortesia(
        parseFloat(parseFloat(textCortesia) + parseFloat(textInput))
      );
      setTextInput();
      setTextSaldo(textSaldo - textInput);
    }
  };
  const moneyFormat = (numb) => {
    let format = numb.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    return format;
  };
  const handleOnListo = () => {
    if (textSaldo != 0) {
      Alert.alert(
        "Saldo insuficiente",
        "No puedes cerrar una cuenta sin saldar."
      );
    } else {
      navigation.navigate("Dashboard");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Body>
        <Title
          text={"Total: $" + moneyFormat(total)}
          style={{ marginBottom: 30 }}
        />
        <Input
          placeholder={"Cantidad"}
          value={textInput}
          onChangeText={handleOnChangeText}
          keyboardType="numeric"
          style={{ marginBottom: 30 }}
        />
        <View style={styles.buttonContainer}>
          <Button
            title={"Efectivo"}
            onPress={handleOnSetEfectivo}
            style={styles.buttonGreen}
          />
          <Button
            title={"Tarjeta"}
            onPress={handleOnSetTdc}
            style={styles.buttonBlue}
          />
        </View>
        <Button
          title={"Descuento"}
          onPress={handleOnSetCortesia}
          style={styles.buttonRed}
        />
        <CardContent style={{ flex: 1 / 2 }}>
          <View style={styles.totalesContent}>
            <Title style={styles.saldoText} text={"Efectivo"} />
            <Title
              style={styles.saldoText}
              text={"$ " + moneyFormat(textEfectivo)}
            />
            <Title style={styles.saldoText} text={"Tarjeta"} />
            <Title
              style={styles.saldoText}
              text={"$ " + moneyFormat(textTdc)}
            />
            <Title style={styles.saldoText} text={"Descuento"} />
            <Title
              style={styles.saldoText}
              text={"$ " + moneyFormat(textCortesia)}
            />
            <Title style={styles.saldoText} text={"Saldo"} />
            <Title
              style={
                textSaldo === 0 ? styles.saldoTextGreen : styles.saldoTextRed
              }
              text={"$" + moneyFormat(textSaldo)}
            />
          </View>
        </CardContent>
        <Button title={"Listo"} onPress={handleOnListo} />
        <DiscretButton
          title={"Regresar"}
          onPress={() => navigation.goBack()}
          style={{ marginTop: 30 }}
          styleText={{ color: Coolors.textInput }}
        />
      </Body>
    </TouchableWithoutFeedback>
  );
}
//////////
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 15,
  },
  buttonBlue: {
    backgroundColor: Coolors.blue,
    width: "45%",
  },
  buttonRed: {
    backgroundColor: Coolors.orage,
    marginBottom: 40,
  },
  buttonGreen: {
    width: "45%",
  },
  totalesContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  saldoText: {
    width: "50%",
    marginBottom: 10,
  },
  saldoTextRed: {
    width: "50%",
    color: Coolors.red,
  },
  saldoTextGreen: {
    width: "50%",
    color: Coolors.lightGreen,
  },
});
