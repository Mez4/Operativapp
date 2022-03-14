import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RegistroNavigator from './RegistroNavigator';

function MainNavigator(){
    return(
        <NavigationContainer>
            <RegistroNavigator/>
        </NavigationContainer>
    )
}
export default MainNavigator