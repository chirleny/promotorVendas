import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {
    useFonts,
    Montserrat_300Light,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  } from '@expo-google-fonts/montserrat';

function CadastroScreen({navigation}) {
    let [fontsLoaded] = useFonts({
        Montserrat_300Light,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    });

    const handleHome = () => {
        navigation.navigate('Home');
      };
  return (
  <View style={{ backgroundColor: "#DFDEE0", flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', }}>
    <Text style={styles.titulo}>Criar conta</Text>
        <TextInput style={styles.input} placeholder="Nome"/>
        <TextInput style={styles.input} placeholder="E-mail"/>
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/>
        <TextInput style={styles.input} placeholder="Repetir Senha" secureTextEntry={true}/>
        <TextInput style={styles.input} placeholder="CPF"/>
        <TextInput style={styles.input} placeholder="E-mail do supervisor"/>

        <TouchableOpacity style={styles.botaoCadastro} onPress={handleHome}>
            <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
    titulo:{
        fontWeight: 'bold',
        marginTop: 20,
        marginRight: 205,
        fontSize: 20,
        fontFamily: 'Montserrat_700Bold'
    },
    input: {
        width: '85%',
        marginVertical: 20,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#FFFDFD',
        fontFamily: 'Montserrat_300Light'
    },
    botaoCadastro: {
        width: '85%',
        backgroundColor: '#0C0B0B',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007bff',
        marginTop: 10,
        marginBottom: 30
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Montserrat_600SemiBold'
    },
  });

export default CadastroScreen;