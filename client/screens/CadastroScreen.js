import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Axios from 'axios';
/*import {
    useFonts,
    Montserrat_300Light,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  } from '@expo-google-fonts/montserrat';*/
import Styles from './Styles.js'

function CadastroScreen({navigation}) {
    let sucesso = 'Usuário cadastrado com sucesso!';
  
    const [getNome,setNome] = useState();
    const [getSenha,setSenha] = useState();
    const [getEmail,setEmail] = useState();
    const [getCPF,setCPF] = useState();
    const [getSupervisor,setSupervisor] = useState();

    const [modalVisible, setModalVisible] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorNome, setErrorNome] = useState(false);
    const [errorSenha, setErrorSenha] = useState(false);
    const [errorCPF, setErrorCPF] = useState(false);
    const [errorSupervisor, setErrorSupervisor] = useState(false);

    /*let [fontsLoaded] = useFonts({ 
        Montserrat_300Light,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    });*/

    const handleLogin = () => {
        navigation.navigate('Login');
        setModalVisible(false);
    };   
  
  const checkCadastro = (values) => {  
    var nomeVazio = getNome == undefined || getNome == '' ? true : false;
    setErrorNome(nomeVazio);

    var emailVazio = getEmail == undefined || getEmail == '' ? true : false;
    setErrorEmail(emailVazio);

    var senhaVazia = getSenha == undefined || getSenha == '' ? true : false;
    setErrorSenha(senhaVazia);

    var cpfVazio = getCPF == undefined || getCPF == '' ? true : false;
    setErrorCPF(cpfVazio);

    /*var supervisorVazio = getSupervisor == undefined || getSupervisor == '' ? true : false;
    setErrorSupervisor(supervisorVazio);*/

    if(!nomeVazio && !emailVazio && !senhaVazia && !cpfVazio){
      handleCadastro();
    }
  };

    const handleCadastro = (values) => {
      navigation.navigate('Cadastro');
      console.log('cadaaaaaaa');
      Axios.post("http://192.168.10.3:3001/cadastro", {
        email: getEmail,
        senha: getSenha,
        nome: getNome,
        //email_supervisor: getSupervisor,
        cpf: getCPF,
        perfil: 'Supervisor'
      }).then((response) =>{    
        sucesso = response.data.msg;
        setModalVisible(true);
        console.log(response);
      }); 
    };

    return (
        <View style={Styles.main}>
          <Text style={Styles.titulo}>Criar conta</Text>
            
            <TextInput style={Styles.input} name="nome" placeholder="Nome" onChangeText={text => setNome(text)} value={getNome}/>
            {errorNome ? (<Text style={styles.errorMsg}>Digite o nome</Text>) : ''}

            <TextInput style={Styles.input} required="true" name="email" placeholder="E-mail" onChangeText={text => setEmail(text)} value={getEmail} />
            {errorEmail ? (<Text style={styles.errorMsg}>Digite o e-mail</Text>) : ''}

            <TextInput style={Styles.input} placeholder="Senha" secureTextEntry={true} onChangeText={text => setSenha(text)} value={getSenha}/>
            {errorSenha ? (<Text style={styles.errorMsg}>Digite uma senha</Text>) : ''}

            <TextInput style={Styles.input} placeholder="Repetir Senha" secureTextEntry={true}/>
            
            <TextInput style={Styles.input} placeholder="CPF" onChangeText={text => setCPF(text)} value={getCPF}/>
            {errorCPF ? (<Text style={styles.errorMsg}>Digite o CPF</Text>) : ''}    

            <TouchableOpacity style={styles.botaoCadastro} onPress={checkCadastro}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
        
          <Modal
            visible={modalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={() => {
              setModalVisible(false);
          }}>
            <View style={styles.modalMain}>
              <View style={styles.modal}>
                <Text style={styles.textoDivs}>{sucesso}</Text>
                <Text style={styles.descricaoEmAndamento}>Faça login para acessar sua conta.</Text>
                <TouchableOpacity style={styles.botaoFazerLogin} onPress={handleLogin}>
                    <Text style={styles.textoBotao}>Fazer login</Text>
                </TouchableOpacity>
              </View>
              </View>
            </Modal>
        </View>
      );
    }


const styles = StyleSheet.create({  
    errorMsg:{
      color: '#A52A2A',
      fontWeight: 'bold',
      fontSize: 15,
      fontFamily: 'Montserrat_700Bold'
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
    botaoFazerLogin: {
      width: '65%',
      backgroundColor: '#0C0B0B',
      padding: 8,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#252424',
      marginTop: 10,
    },
    textoBotao: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Montserrat_600SemiBold'
    },
    modal:{
      backgroundColor: '#68A54C', 
      margin: 20,
      padding: 20,
      borderRadius: 20,
      elevation:1,   
      alignItems: 'center',
      justifyContent: 'center',   
    },
    modalMain:{
      backgroundColor: 'rgba(0,0,0,0.5)',    
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    textoDivs:{
      fontWeight: 'bold',
      fontSize: 17,
      fontFamily: 'Montserrat_600SemiBold'
    },
    descricaoEmAndamento:{
      marginTop: 7,
      fontSize: 16,
      color: '#F0E3E3',
      fontWeight: 'bold',
      fontFamily: 'Montserrat_600SemiBold'
  },
  });

export default CadastroScreen;