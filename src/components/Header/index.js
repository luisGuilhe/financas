import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
} from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }){
    return(
        <View style={styles.conteiner}>
            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>
                
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Image 
                        source={require("../../icons/user1.png")}
                        style={{ height:40, width:40, }}
                    />
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