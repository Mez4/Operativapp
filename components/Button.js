import React from 'react'
import { StyleSheet, Text,  TouchableOpacity} from 'react-native'
import { Coolors } from '../constants/colors'

function Button({onPress, title, style}) {
    return(        
        <TouchableOpacity 
        onPress={onPress} 
        style={{...styles.button, ...style}}>
            <Text style={styles.buttonTittle}>{title}</Text>
        </TouchableOpacity>  

    )
}

const styles = StyleSheet.create({
button:{
    backgroundColor:Coolors.lightGreen,
    height:43,
    width:'90%',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
},
buttonTittle:{
    color:Coolors.white,
    textAlign:'center',
    fontSize:25,
    fontFamily:'PoppinsBold',
},
})

export default Button