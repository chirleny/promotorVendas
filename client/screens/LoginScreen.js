import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import Axios from 'axios';  

function LoginScreen({navigation}) {
  var email;
  var senha;

  const [getSenha,setSenha] = useState();
  const [getEmail,setEmail] = useState();

  const [errorEmailSenha, setErrorEmailSenha] = useState(false);
  const [errorVazio, setErrorVazio] = useState(false);

  const handleLogin = () => {
      Axios.post("http://localhost:3001/login", {
        email: getEmail,
        senha: getSenha,
      }).then((response) =>{
        if(response.data.msg.includes('Usuário não encontrado')){
          setErrorEmailSenha(true);
        }else{
          console.log(response.data);
          if(response.data.usuario.perfil == 'Promotor'){
              navigation.navigate('Home', {
                usuario: response.data
              });
          }else if (response.data.usuario.perfil == 'Supervisor'){
              navigation.navigate('HomeSupervisor', {
                usuario: response.data.usuario
              });
          }
          

          setErrorEmailSenha(false);
        }
      }); 
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  const checkLogin = (values) => {  

    var campoVazio = getEmail == undefined || getEmail == '' || getSenha == undefined || getSenha == '' ? true : false;
    setErrorVazio(campoVazio);

    if(!campoVazio){
      handleLogin();
    }
  };

  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  return (
    
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.titulo}>Bem-vindo ao PVendas</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={text => setEmail(text)} value={getEmail}/>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={text => setSenha(text)} value={getSenha}
        secureTextEntry={true}
      />
      
      <Text style={styles.errorMsg}>{ errorEmailSenha == true ? 'E-mail ou senha incorretos.' : ''}</Text>
      <Text style={styles.errorMsg}>{ errorVazio == true ? 'Digite o e-mail e a senha.' : ''}</Text>

      <TouchableOpacity style={styles.botao} onPress={checkLogin}>
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
  errorMsg:{
    color: '#A52A2A',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Montserrat_700Bold'
  },
});

export default LoginScreen;