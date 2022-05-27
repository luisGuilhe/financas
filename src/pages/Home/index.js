import React from 'react';
import {
      View, 
      Text,
      StyleSheet,
      FlatList
} from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {
        id:0,
        label:"Conta luz",
        value:"500,00",
        date:"26/05/2022",
        type:0
    },
    {
        id:1,
        label:"Conta agua",
        value:"300,00",
        date:"25/05/2022",
        type:0
    },    
    {
        id:2,
        label:"Conta internet",
        value:"150,00",
        date:"27/05/2022",
        type:0
    },
    {
        id:3,
        label:"Pagamento Salario  CLT",
        value:"5500,00",
        date:"01/05/2022",
        type:1
    },
    {
        id:4,
        label:"Pagamento Salario PJ",
        value:"4800,00",
        date:"05/05/2022",
        type:1
    },
    {
        id:5,
        label:"Freela",
        value:"500,00",
        date:"10/05/2022",
        type:1
    },
    {
        id:6,
        label:"Conta Cartao",
        value:"2000,00",
        date:"15/05/2022",
        type:0
    },
];


export default function Home(){
  return (
    <View style={styles.conteiner}>
        <Header name="Luis Guilherme Aires Dias"/>
        
        <Balance saldo="10.800,00" gastos="-2.950,00"/>

        {/* <Actions /> */}

        <Text style={styles.title}> Últimas Movitações</Text>

        <FlatList 
            style={styles.list}
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Movements  data={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    // backgroundColor:"#FFF",
    backgroundColor:"#FAFAFA",
  },
  title:{
      fontSize:18,
      fontWeight:'bold',
      margin:14,
  },
  list:{
    marginStart:14,
    marginEnd:14, 
  }
});