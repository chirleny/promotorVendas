import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import Axios from 'axios';
import Styles from './Styles.js'

function CadastroPromotorScreen({route, navigation}) {
    let sucesso = 'Usuário cadastrado com sucesso!';
    
    const { usuario } = route.params;
    const [getNome,setNome] = useState();
    const [getSenha,setSenha] = useState();
    const [getEmail,setEmail] = useState();
    const [getCPF,setCPF] = useState();
    const [getEndereco,setEndereco] = useState();

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorNome, setErrorNome] = useState(false);
    const [errorSenha, setErrorSenha] = useState(false);
    const [errorCPF, setErrorCPF] = useState(false);
    const [errorEndereco, setErrorEndereco] = useState(false);
  
  const checkCadastro = (values) => {  
    var nomeVazio = getNome == undefined || getNome == '' ? true : false;
    setErrorNome(nomeVazio);

    var emailVazio = getEmail == undefined || getEmail == '' ? true : false;
    setErrorEmail(emailVazio);

    var senhaVazia = getSenha == undefined || getSenha == '' ? true : false;
    setErrorSenha(senhaVazia);

    var cpfVazio = getCPF == undefined || getCPF == '' ? true : false;
    setErrorCPF(cpfVazio);

    var enderecoVazio = getEndereco == undefined || getEndereco == '' ? true : false;
    setErrorEndereco(enderecoVazio);

    if(!nomeVazio && !emailVazio && !senhaVazia && !cpfVazio){
      handleCadastro();
    }
  };

    const handleCadastro = (values) => {
      Axios.post("http://192.168.10.3:3001/cadastroPromotor", {
        email: getEmail,
        senha: getSenha,
        nome: getNome,
        endereco: getEndereco,
        email_supervisor: usuario.email,
        cpf: getCPF,
        perfil: 'Promotor'
      }).then((response) =>{    
        sucesso = response.data.msg;
        Toast.show({type: 'success', text1: 'Sucesso', text2: 'Promotor cadastrado com sucesso!'});
        setTimeout(() => {
            navigation.navigate('HomeSupervisor', {
                usuario: usuario
            });
        }, 2000)
        console.log(response);
      }); 
    };

    return (
        <View style={Styles.main}>
          <Text style={Styles.titulo}>Criar conta</Text>
          <Text style={Styles.labelsCadastro}>Nome</Text> 
            <TextInput style={Styles.input} name="nome" onChangeText={text => setNome(text)} value={getNome}/>
            {errorNome ? (<Text style={Styles.errorMsg}>Digite o nome</Text>) : ''}

            <Text style={Styles.labelsCadastro}>E-mail</Text> 
            <TextInput style={Styles.input} required="true" name="email" onChangeText={text => setEmail(text)} value={getEmail} />
            {errorEmail ? (<Text style={Styles.errorMsg}>Digite o e-mail</Text>) : ''}

            <Text style={Styles.labelsCadastro}>Senha</Text> 
            <TextInput style={Styles.input} secureTextEntry={true} onChangeText={text => setSenha(text)} value={getSenha}/>
            {errorSenha ? (<Text style={Styles.errorMsg}>Digite uma senha</Text>) : ''}
            
            <Text style={Styles.labelsCadastro}>CPF</Text> 
            <TextInput style={Styles.input} onChangeText={text => setCPF(text)} value={getCPF}/>
            {errorCPF ? (<Text style={Styles.errorMsg}>Digite o CPF</Text>) : ''}

            <TouchableOpacity style={Styles.botaoCadastro} onPress={checkCadastro}>
                <Text style={Styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
            <Toast />

        </View>
      );
    }

export default CadastroPromotorScreen;