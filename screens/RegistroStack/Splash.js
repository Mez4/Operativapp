//colores
import React from "react";
import { Coolors } from "../../constants/colors";
//componentes
import { Body, Button, NameApp, TextDescription } from "../../components/index";
import { StyleSheet, Text } from "react-native";
//svg
import SplashSvg from "../../assets/svg/splash";

export default function Splash({ navigation }) {
  return (
    <Body>
      <SplashSvg style={styles.image} width={"60%"} height={"30%"} />
      <NameApp style={{ fontSize: 30, marginVertical: 10 }} />
      <TextDescription
        style={styles.descripcion}
        text={
          "Et culpa fugiat ea magna incididunt in nostrud eiusmod non irure excepteur sunt consequat exercitation. Do est ipsum occaecat duis ex ex. Dolor ea consectetur."
        }
      />
      <Button
        title={"Comenzar"}
        onPress={() => navigation.navigate("RegistroScreen")}
      />
    </Body>
  );
}
//////////
const styles = StyleSheet.create({
  verde: {
    color: Coolors.lightGreen,
  },
  descripcion: {
    width: "70%",
    marginBottom: 100,
  },
});
