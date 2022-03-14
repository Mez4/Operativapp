import React from 'react'
import {Text, StyleSheet} from 'react-native'
import { Coolors } from '../constants/colors'

function TextDescription({text, style}) {
    return(        
        <Text style={{...styles.text, ...style}}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontFamily:'Poppins',
        color:Coolors.textCardColor,
        textAlign: "center",
      },
})

export default TextDescription