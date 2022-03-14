//colores
import React from "react";
import { Coolors } from "../../constants/colors";
//componentes
import { Body, Button, Input, Title, TextDescription } from "../../components/index";
import { StyleSheet, Text } from "react-native";

export default function Registro({ navigation }) {
  return (
    <Body>
      <Title text={'¡Bienvenido!'}/>
      <TextDescription text={"comenzar con el registro"}/>
      <Input style={styles.input} placeholder={'ingresa tu nombre'}/>
      <Input style={styles.input} placeholder={'ingresa tu apellido'}/>
      <Input style={styles.input} placeholder={'ingresa tus email'}/>
      <Input style={styles.input} placeholder={'ingresa tu contraseña'}/>
      <Input style={styles.input} placeholder={'confirma tu contraseña'}/>
      <Button
        title={"Listo"}
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </Body>
  );
}
//////////
const styles = StyleSheet.create({
  input:{
    marginBottom:25,
  },
});
