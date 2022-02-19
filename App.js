import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
} from "react-native";
import ScreenCuentasAbiertas from './screen/ScreenCuentasAbiertas'
import ScreenPedidosCuenta from './screen/ScreenPedidosCuenta'
import Body from "./components/Body";

export default function App() {
const [accountTag, setAccountTag] = useState()

const handleOnOpenAccount = selectedAccount =>{
  setAccountTag(selectedAccount)
}

  let content = <ScreenCuentasAbiertas onAccountSelected={handleOnOpenAccount}/>

  if(accountTag){
    content= <ScreenPedidosCuenta accountTag={accountTag}/>
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
