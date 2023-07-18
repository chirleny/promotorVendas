import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
//import  MapScreen  from './MapScreen'; 

function CheckOutScreen({navigation}) {

    return (    
        <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity>
                  <Ionicons style={styles.icon} name="person-outline" size={35} />
              </TouchableOpacity>
              <Text style={styles.titulo}>Finalizar Rota</Text> 
            </View> 
            <Text style={styles.tituloCheckOut}>Check-Out</Text>
            <View style={styles.containerNew}>
                
            </View>

            <View style={styles.main}>              
                <TouchableOpacity style={styles.botaoCadastro}>
                    <Text style={styles.textoBotao}>Realizar Check-Out</Text>
                </TouchableOpacity>
            </View> 
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#DFDEE0',
    },
    containerNew:{
        width: '85%',
        height: '70%',
        backgroundColor: '#DFDEE0',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 25,
        borderColor: '#0C0B0B',
    },
    tituloCheckOut:{
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 25
    },
    box:{
        width: '33%',
        height: '50%',
        padding: 5,
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    botaoCadastro: {
        width: '85%',
        height: 35,
        backgroundColor: '#0C0B0B',
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 15,
        borderColor: '#007bff',
    },
    botaoInfos: {
        width: '85%',
        height: 35,
        backgroundColor: '#DFDEE0',
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 15,
        borderColor: '#0C0B0B',
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    main: {
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center', 
    },
    icon:{
        padding: 15,
    },
    header:{
        width: '100%',
        height: '15%',
        alignItems: 'center',
        backgroundColor: '#DFDEE0',
        flexDirection:'row'
    },
});

export default CheckOutScreen;