import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function CadastroScreen({navigation}) {
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
        fontSize: 20
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
        backgroundColor: '#FFFDFD'
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
    },
  });

export default CadastroScreen;