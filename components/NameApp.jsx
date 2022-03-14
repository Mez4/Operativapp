import React from "react";
import { Text} from "react-native";
import { Coolors } from "../constants/colors";

function NameApp({style}) {
  return (
    <Text
      style={{
        fontFamily: "PoppinsBold",
        color: Coolors.titleCardColor,
        ...style
      }}
    >
      Operati
      <Text style={{ color: Coolors.lightGreen }}>vApp</Text>
    </Text>
  );
}

export default NameApp;
