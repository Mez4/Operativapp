//colores
import React from "react";
import { Coolors } from "../../constants/colors";
//componentes
import { Body, Button, Input, Title, TextDescription } from "../../components/index";
import {StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";


export default function Registro({ navigation }) {
  return (
    <Body>
      <TouchableWithoutFeedback style={{flex:1, width:'100%', height:'100%',}} onPress={Keyboard.dismiss}>
      <Body>
      <Title text={'¡Bienvenido!'}/>
      <TextDescription style={{marginBottom:25,}}text={"registra tus datos para comenzar"}/>
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
      </TouchableWithoutFeedback>
    </Body>
  );
}
//////////
const styles = StyleSheet.create({
  input:{
    marginBottom:25,
  },
});
