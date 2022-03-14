import React from 'react'
import {Text, StyleSheet} from 'react-native'
import { Coolors } from '../constants/colors'

function Title({text, style, Children}) {
    return(        
        <Text style={{...styles.titulo, ...style}}> {text} {Children}</Text>
    )
}

const styles = StyleSheet.create({
    titulo:{
        fontSize:30,
        fontFamily:'PoppinsBold',
        color:Coolors.titleCardColor,
      },
})

export default Title