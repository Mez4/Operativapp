import React from 'react'
import { StyleSheet, View} from 'react-native'
import {Colors} from '../constants/colors';

function Body({style, children,...props}) {
    return(        
        <View {...props}style={{...styles.container, ...style}}>
            {children}
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightGray, 
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:'100%',
      },
})

export default Body