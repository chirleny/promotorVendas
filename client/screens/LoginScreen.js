import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Axios from 'axios';   
import Styles from './Styles.js';

function LoginScreen({navigation}) {
  var email;
  var senha;

  const [getSenha,setSenha] = useState();
  const [getEmail,setEmail] = useState();

  const [errorEmailSenha, setErrorEmailSenha] = useState(false);
  const [errorVazio, setErrorVazio] = useState(false);

  const handleLogin = () => {
    console.log(getEmail);
    console.log(getSenha);
      Axios.post("http://192.168.10.3:3001/login", {        
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

  return (
    
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#DFDEE0" }}>
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
  },
  input: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#FFFDFD'
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
  },
  errorMsg:{
    color: '#A52A2A',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default LoginScreen;