import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CuentasAbiertas from "../screens/CuentasAbiertas"
import PedidosCuenta from "../screens/PedidosCuenta"
import AgregarProductos from '../screens/AgregarProducto'

const Stack = createNativeStackNavigator();

function CuentasNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Dashboard' component={CuentasAbiertas}/>
                <Stack.Screen name='Cuenta' component={PedidosCuenta}/>
                <Stack.Screen name='Ordenar' component={AgregarProductos}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default CuentasNavigator