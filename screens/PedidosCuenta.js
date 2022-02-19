import CardContent from "../components/CardContent";
import Button from "../components/Button";
import Body from "../components/Body";
import { Coolors } from "../constants/colors";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ScreenPedidosCuenta({accountTag}) {
  return (
    <Body>
      <CardContent style={{height:350,}}>
        <Text style={styles.accountName}>{accountTag.value}</Text>
        <View style={styles.fakeContainer}></View>
      </CardContent>
      <Text style={styles.total}>
        Total: $1,340.00
      </Text>
      <Button title={'Nuevo Pedido'} style={styles.buttonBlue}/>
      <Button title={'listo'} style={styles.buttonGreen}/>
      <Button title={'Cerrar cuenta'} style={styles.buttons, styles.buttonRed}/>
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
  buttonBlue:{
    backgroundColor:Coolors.blue,
    marginBottom:15,    
    marginTop:100,
  },
  buttonGreen:{
    backgroundColor:Coolors.lightGreen,
    marginBottom:15,
  },
  buttonRed:{
    backgroundColor:Coolors.red,
  },
  accountName:{
    alignSelf:"flex-end",
    fontSize:25,
    fontFamily:'PoppinsBold',
  },
  fakeContainer:{
    flex:1,
    backgroundColor:Coolors.orage,
  },
});
