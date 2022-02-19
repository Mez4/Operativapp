import React from 'react'
import { StyleSheet, Text,  TouchableOpacity} from 'react-native'
import { Colors } from '../constants/colors'

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
    backgroundColor:Colors.lightGreen,
    height:43,
    width:'90%',
    borderRadius:5,
    marginBottom:120,
    alignItems:'center',
    justifyContent:'center',
},
buttonTittle:{
    color:Colors.white,
    textAlign:'center',
    fontSize:25,
    fontFamily:'PoppinsBold',
},
})

export default Button