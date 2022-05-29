import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont().then();

export default function Actions() {
 return (
   <ScrollView style={styles.conteiner} horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
        <AntDesign name="tagso" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
        <AntDesign name="creditcard" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="barcode" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="setting" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Conta</Text>
      </TouchableOpacity>
   
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    conteiner:{
      maxHeight:84,
      marginBottom:14, 
      marginTop:18, 
      paddingEnd:14,
      paddingStart:14,
      paddingBottom:10,
    },
    actionButton:{
      alignItems:"center",
      marginRight:32,
    },
    areaButton:{
      backgroundColor:"#ecf0f1",
      height:55,
      width:55,
      borderRadius:30,
      justifyContent:"center",
      alignItems:"center"
    },
    labelButton:{
      marginTop:4,
      textAlign:"center",
      fontWeight:"bold"
    }

})