import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './DrawerNavigator'
function MainNavigator(){
    return(
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    )
}
export default MainNavigator