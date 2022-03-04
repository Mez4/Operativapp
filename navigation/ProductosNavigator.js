import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Productos from "../screens/Productos";

const StackProductos = createNativeStackNavigator();

function ProductosNavigator() {
  return (
      <StackProductos.Navigator initialRouteName="Productos">
        <StackProductos.Screen
          name="Productos"
          component={Productos}
          options={{ headerShown: false }}
        />
      </StackProductos.Navigator>
  );
}

export default ProductosNavigator

