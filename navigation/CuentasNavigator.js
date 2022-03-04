import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../screens/Dashboard";
import Cuenta from "../screens/Cuenta";
import Ordenar from "../screens/Ordenar";

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
      </StackCuenta.Navigator>
  );
}

export default CuentasNavigator

