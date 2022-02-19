import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
} from "react-native";
import CuentasAbiertas from './screens/CuentasAbiertas'
import PedidosCuenta from './screens/PedidosCuenta'
import Body from "./components/Body";

export default function App() {
const [accountTag, setAccountTag] = useState()

const handleOnOpenAccount = selectedAccount =>{
  setAccountTag(selectedAccount)
}

  let content = <CuentasAbiertas onAccountSelected={handleOnOpenAccount}/>

  if(accountTag){
    content= <PedidosCuenta accountTag={accountTag}/>
  } 
  return (
    <Body>
      {content}
      <StatusBar style="auto" />
    </Body>
  );
}
//////////
const styles = StyleSheet.create({
  
});
