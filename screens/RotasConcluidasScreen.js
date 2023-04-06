import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  } from '@expo-google-fonts/montserrat';
  

function RotaScreen() {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
      });
  return (    
    <View style={styles.container}>
        <View style={styles.header}>
            <Ionicons style={styles.icon} name="person-outline" size={35} />
            <Text style={styles.titulo}>Minhas Rotas concluídas</Text> 
        </View>
        <View style={styles.containerList}>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.textoDivs}>Supermercado Pernambucano</Text>
                    <Text style={styles.descricaoEmAndamento}>15/02/2023 10h - 11h</Text>
                    <TouchableOpacity style={styles.botaoCadastro}>
                        <Text style={styles.textoBotao}>Baixar relatório</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.textoDivs}>Supermercado Pernambucano</Text>
                    <Text style={styles.descricaoEmAndamento}>15/02/2023 10h - 11h</Text>
                    <TouchableOpacity style={styles.botaoCadastro}>
                        <Text style={styles.textoBotao}>Baixar relatório</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.textoDivs}>Supermercado Pernambucano</Text>
                    <Text style={styles.descricaoEmAndamento}>15/02/2023 10h - 11h</Text>
                    <TouchableOpacity style={styles.botaoCadastro}>
                        <Text style={styles.textoBotao}>Baixar relatório</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.textoDivs}>Supermercado Pernambucano</Text>
                    <Text style={styles.descricaoEmAndamento}>15/02/2023 10h - 11h</Text>
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
        width: '50%',
        height: 35,
        backgroundColor: '#252424',
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