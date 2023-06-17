import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import  MapScreen  from './MapScreen'; 

function CheckOutScreen({navigation}) {

    let [fontsLoaded] = useFonts({
      Montserrat_400Regular,
      Montserrat_600SemiBold,
      Montserrat_700Bold,
    });

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
                <MapScreen />
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
        fontFamily: 'Montserrat_700Bold',
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
        fontFamily: 'Montserrat_700Bold'
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
        fontFamily: 'Montserrat_400Regular',       
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