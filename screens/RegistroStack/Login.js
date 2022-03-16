//colores
import React from "react";
import { Coolors } from "../../constants/colors";
//componentes
import {
  Body,
  Button,
  Title,
  TextDescription,
  DiscretButton,
  Input,
} from "../../components/index";
import { StyleSheet, Text } from "react-native";
import LoginSvg from "../../assets/svg/login";

export default function Login({ navigation }) {
  return (
    <Body>
      <Title text={"Hola de nuevo!"} />
      <TextDescription
        text={"inicia sesión con tus datos."}
        style={{ marginBottom: 30 }}
      />
      <LoginSvg style={styles.image} width={"70%"} height={"30%"} />
      <Input style={styles.input} placeholder={"ingresa tus email"} />
      <Input style={styles.input} placeholder={"ingresa tu contraseña"} />
      <DiscretButton
        style={{ marginVertical: 20 }}
        title={"olvidé mi contraseña."}
      />
      <Button
        title={"ENTRAR"}
        onPress={() => navigation.navigate("DrawerNav")}
      />
      <TextDescription
        style={{ marginTop: 30 }}
        text={"¿aun no tienes cuenta?"}
      />
      <DiscretButton title={"Registrate"} 
      onPress={() => navigation.navigate("RegistroScreen")}
      />
    </Body>
  );
}
//////////
const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
  },
});
