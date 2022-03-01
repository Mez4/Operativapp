import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Dashboard from "../screens/Dashboard";
import Cuenta from "../screens/Cuenta";
import Ordenar from "../screens/Ordenar";
import Menu from "../screens/Menu";
import Productos from "../screens/Productos";

const StackCuenta = createNativeStackNavigator();

function CuentasNavigator() {
  return (
    <NavigationContainer>
      <StackCuenta.Navigator>
        <StackCuenta.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <StackCuenta.Screen
          name="Cuenta"
          component={Cuenta}
          options={{ headerShown: false }}
        />
        <StackCuenta.Screen
          name="Ordenar"
          component={Ordenar}
          options={{ headerShown: false }}
        />
      </StackCuenta.Navigator>
    </NavigationContainer>
  );
}

export default CuentasNavigator

