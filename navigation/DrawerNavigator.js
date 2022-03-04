import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer'    
import CuentasNavigator from './CuentasNavigator'
import ProductosNavigator from './ProductosNavigator'

const Drawer = createDrawerNavigator()

function DrawerNavigator(){
    return(
            <Drawer.Navigator initialRouteName="Cuentas">
                <Drawer.Screen name="Cuentas" component={CuentasNavigator}/>
                <Drawer.Screen name="Producto" component={ProductosNavigator}/>  
            </Drawer.Navigator>
    )
}
export default DrawerNavigator