import React from 'react';
import { MotiView, MotiText} from 'moti';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont().then();


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }){
    return(
        <View style={styles.conteiner}>

            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <AntDesign name="user" size={30} color="#000" />
                </TouchableOpacity>
            </View>
        
        </View>
    );    
}

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor:"#8000FF",
        paddingTop: statusBarHeight,
        flexDirection:"row",
        paddingStart:16,
        paddingEnd:16,
        paddingBottom:44
    },
    content:{
        flex:1,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    username:{
        fontSize:18,
        color:"#FFF",
        fontWeight:"bold"
    },
    buttonUser:{
        width:44,
        height:44,
        backgroundColor:'rgba(255,255,255,0.5)',
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 44 / 2
    }
});