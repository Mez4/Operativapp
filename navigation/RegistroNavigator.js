import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../screens/RegistroStack/Splash";
import Registro from "../screens/RegistroStack/Registro";
import Login from "../screens/RegistroStack/Login";
import DrawerNavigator from "./DrawerNavigator";

const StackRegistro = createNativeStackNavigator();

function RegistroNavigator() {
  return (
      <StackRegistro.Navigator initialRouteName="SplashScreen">
        <StackRegistro.Screen
          name="SplashScreen"
          component={Splash}
          options={{ headerShown: false }}
        />
        <StackRegistro.Screen
          name="RegistroScreen"
          component={Registro}
          options={{ headerShown: false }}
        />
        <StackRegistro.Screen
          name="LoginScreen"
          component={Login}
          options={{ headerShown: false }}
        />
        <StackRegistro.Screen
          name="DrawerNav"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </StackRegistro.Navigator>
  );
}

export default RegistroNavigator

