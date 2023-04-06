import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';

function LoginScreen({navigation}) {
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  return (
    
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.titulo}>Bem-vindo ao PVendas</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"/>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoCadastro} onPress={handleCadastro}>
        <Text style={styles.textoBotao}>Cadastrar-se</Text>
      </TouchableOpacity>

  </View>
  );
}
const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    marginBottom: 50,
    fontFamily: 'Montserrat_500Medium'
  },
  input: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    fontFamily: 'Montserrat_300Light'
  },
  botao: {
    backgroundColor: '#68A54C',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
  },
  botaoCadastro: {
    backgroundColor: '#0C0B0B',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007bff',
    marginTop: 10,
    width: '80%',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold'
  },
});

export default LoginScreen;