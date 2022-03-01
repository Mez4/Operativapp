import React from 'react'
import { StyleSheet, View} from 'react-native'
import {Coolors} from '../constants/colors';

function CardContent({style, children,...props}) {
    return(        
        <View {...props}style={{...styles.container, ...style}}>
            {children}
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius:25,
        width:'90%',
        padding:25,
        marginBottom:15,
        backgroundColor:Coolors.white,
      },
})

export default CardContent