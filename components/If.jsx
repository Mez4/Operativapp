import React, {Fragment} from 'react'
import { StyleSheet, View} from 'react-native'
import {Coolors} from '../constants/colors';

function If({show, style, children,...props}) {
        if(show == true){
           return(
               <View {...props}style={{...styles.container, ...style}}>
                   {children}
               </View>  
           )
        }
        else{
            return(
                <View></View>
            )
        }
}

const styles = StyleSheet.create({ 
    container:{
     flex:1,
     justifyContent:'center',
    }
})

export default If

