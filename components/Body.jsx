import React from 'react'
import { StyleSheet, View} from 'react-native'
import { StatusBar } from "expo-status-bar";
import {Coolors} from '../constants/colors';

function Body({style, children,...props}) {
    return(        
        <View {...props}style={{...styles.container, ...style}}>
            {children}
            <StatusBar style="auto"/>
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Coolors.lightGray, 
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:'100%',
      },
})

export default Body