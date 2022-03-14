//colores
import React from "react";
import { Coolors } from "../../constants/colors";
//componentes
import { Body, Button, Title } from "../../components/index";
import { StyleSheet, Text } from "react-native";

export default function Login({ navigation }) {
  return (
    <Body>
      <Title text={'Login'}/>
      <Button
        title={"registro"}
        onPress={() => navigation.navigate("RegistroScreen")}
      />
      <Button
        title={"ENTRAR"}
        onPress={() => navigation.navigate("DrawerNav")}
      />
    </Body>
  );
}
//////////
const styles = StyleSheet.create({});
