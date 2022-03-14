import React from "react";
//colores
import { Coolors } from "../../constants/colors";
//componentes
import {Body, Button, CardContent} from "../../components/index"
import {StyleSheet, Text, View,} from "react-native";

export default function Cuenta({navigation, route}) {
  const handleOnDashboard=() =>{
    navigation.navigate('Dashboard')
  }
  const handleOnOrdenar=() =>{
    navigation.navigate('Ordenar')
  }

  return (
    <Body>
      <CardContent style={{height:350}}>
        <Text style={styles.accountName}>{route.params.value}</Text>
        <View style={styles.fakeContainer}></View>
      </CardContent>
      <Text style={styles.total}>
        Total: $1,340.00
      </Text>
      <Button title={'Nuevo Pedido'} onPress={handleOnOrdenar} style={styles.buttonBlue}/>
      <Button title={'listo'}  onPress={handleOnDashboard} style={styles.buttonGreen}/>
      <Button title={'Cerrar cuenta'} style={styles.buttonRed}/>
    </Body>

  );
}
//////////
const styles = StyleSheet.create({
  total:{
    fontFamily:'PoppinsBold',
    fontSize:22,
    alignSelf:"flex-start",
    marginLeft:'7%',
    marginVertical:15,
  },
  buttonRed:{
    backgroundColor:Coolors.red,
  },
  buttonBlue:{
    backgroundColor:Coolors.blue,
    marginBottom:15,    
    marginTop:100,
  },
  buttonGreen:{
    backgroundColor:Coolors.lightGreen,
    marginBottom:15,
  },
  accountName:{
    textTransform:"capitalize",
    alignSelf:"flex-end",
    fontSize:25,
    fontFamily:'PoppinsBold',
  },
  fakeContainer:{
    flex:1,
    backgroundColor:Coolors.orage,
  },
});
