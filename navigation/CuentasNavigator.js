import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../screens/CuentasStack/Dashboard";
import Cuenta from "../screens/CuentasStack/Cuenta";
import Ordenar from "../screens/CuentasStack/Ordenar";
import CerrarCuenta from  "../screens/CuentasStack/CerrarCuenta";

const StackCuenta = createNativeStackNavigator();

function CuentasNavigator() {
  return (
      <StackCuenta.Navigator initialRouteName="Dashboard">
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
        <StackCuenta.Screen
          name="Cerrar"
          component={CerrarCuenta}
          options={{ headerShown: false }}
        />
      </StackCuenta.Navigator>
  );
}

export default CuentasNavigator

