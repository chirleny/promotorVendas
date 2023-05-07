import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useIsFocused } from "@react-navigation/native";
import Axios from 'axios';
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  } from '@expo-google-fonts/montserrat';
  

function RotaScreen({route}) {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    });
    const { usuario } = route.params;
    const isFocused = useIsFocused();

    const [getData, setData] = useState([]);

    useEffect(()=>{    
        Axios.post("http://localhost:3001/rotasPromotor", {promotor: usuario.id}).then((response) =>{
            setData(response.data.rotas);
        });  
      }, [isFocused])  
    

  return (    
    <View style={styles.container}>
        <View style={styles.header}>
            <Ionicons style={styles.icon} name="person-outline" size={35} />
            <Text style={styles.titulo}>Minhas Rotas de Hoje</Text> 
        </View>
        <View style={styles.containerList}>
            <View style={styles.boxTitulo}>
                <Text style={styles.tituloRota}>Rotas Agendadas</Text>
            </View>
            {
            getData.map((linha, i) => (
              <View style={styles.box} key={i}>
                <View style={styles.inner} >
                    <Text style={styles.textoDivs}>{linha.loja}</Text>
                    <Text style={styles.descricaoEmAndamento}>10h - 11h</Text>
                    <TouchableOpacity style={styles.botaoCadastro}>
                        <Text style={styles.textoBotao}>Iniciar Rota</Text>
                    </TouchableOpacity>              
                </View>
              </View>                    

            ))
          } 

            <View style={styles.boxSecond}>
                <View style={styles.inner}>
                    <Text style={styles.textoDivs}>Supermercado Pernambucano</Text>
                    <Text style={styles.descricaoEmAndamento}>13h - 14h</Text>
                </View>
            </View>
            <View style={styles.boxSecond}>
                <View style={styles.inner}>
                    <Text style={styles.textoDivs}>Supermercado Pernambucano</Text>
                    <Text style={styles.descricaoEmAndamento}>15h - 16h30</Text>
                </View>
            </View>
            <View style={styles.boxTitulo}>
                <Text style={styles.tituloRota}>Rotas Concluídas Hoje</Text>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.textoDivs}>Supermercado Pernambucano</Text>
                    <Text style={styles.descricaoEmAndamento}>10h - 11h</Text>
                    <TouchableOpacity style={styles.botaoCadastro}>
                        <Text style={styles.textoBotao}>Baixar relatório</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    </View>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon:{
        padding: 15,
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Montserrat_700Bold'
    },
    header:{
        width: '100%',
        height: '15%',
        alignItems: 'center',
        backgroundColor: '#DFDEE0',
        flexDirection:'row'
    },
    containerList:{
        width: '100%',
        height: '80%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#DFDEE0'
    },
    box:{
        width: '100%',
        height: '25%',
        padding: 5,
    },
    boxSecond:{
        width: '100%',
        height: '15%',
        padding: 5,
    },
    inner:{
        flex: 1,
        backgroundColor: '#68A54C',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    descricaoEmAndamento:{
        fontSize: 17,
        color: '#F0E3E3',
        fontWeight: 'bold',
        fontFamily: 'Montserrat_600SemiBold'
    },
    textoDivs:{
        fontWeight: 'bold',
        fontSize: 17,
        fontFamily: 'Montserrat_600SemiBold'
    },
    botaoCadastro: {
        width: '85%',
        height: 35,
        backgroundColor: '#0C0B0B',
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 10,
        borderColor: '#007bff',
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Montserrat_600SemiBold'
    },
    boxTitulo:{
        width: '100%',
        paddingLeft: 18,
    },
    tituloRota:{
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Montserrat_700Bold'
    },
});

export default RotaScreen;