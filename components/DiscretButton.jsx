import React from 'react'
import { StyleSheet, Text,  TouchableOpacity} from 'react-native'
import { Coolors } from '../constants/colors'

function DiscretButton({onPress, title, style,styleText}) {
    return(        
        <TouchableOpacity 
        onPress={onPress} 
        style={{...styles.button, ...style}}>
            <Text style={{...styles.buttonTittle, ...styleText}}>{title}</Text>
        </TouchableOpacity>  

    )
}

const styles = StyleSheet.create({
button:{
    height:30,
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
},
buttonTittle:{
    color:Coolors.lightGreen,
    textAlign:'center',
    fontSize:18,
    fontFamily:'PoppinsBold',
},
})

export default DiscretButton