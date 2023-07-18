import React, { useState, useEffect } from 'react'; 
import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import Styles from './Styles.js'

function EditarUsuarioScreen({route, navigation}) {
    let sucesso = 'Atualizado com sucesso.';
    const { usuario } = route.params;
  
    const [getNome,setNome] = useState();
    const [getSenha,setSenha] = useState();
    const [getEmail,setEmail] = useState();
    const [getCPF,setCPF] = useState();
    const [getId,setId] = useState();
    const [getUser,setUser] = useState();
    const [getSupervisor,setSupervisor] = useState();

    const [modalVisible, setModalVisible] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorNome, setErrorNome] = useState(false);
    const [errorSenha, setErrorSenha] = useState(false);
    const [errorCPF, setErrorCPF] = useState(false);
    const [errorSupervisor, setErrorSupervisor] = useState(false);

    const handleLogin = () => {
        navigation.navigate('Login');
        setModalVisible(false);
    };
    
    useEffect(()=>{    
        setNome(usuario.nome);
        setEmail(usuario.email);
        setSenha(usuario.senha);
        //setSupervisor(usuario.email_supervisor);
        setCPF(usuario.cpf);
        setId(usuario.id);
        setUser(usuario);
    }, [])
  
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
      Axios.post("http://192.168.10.3:3001/editarUsuario", {
        email: getEmail,
        senha: getSenha,
        nome: getNome,
        //email_supervisor: getSupervisor,
        cpf: getCPF,
        id: getId
      }).then((response) =>{    
        sucesso = response.data.msg;
        setModalVisible(true);
        //navigation.navigate('Home', {
          //usuario: getUser
        //});
      }); 
    };

    return (
        <View style={Styles.main}>
          <Text style={Styles.titulo}>Editar meus dados</Text>
            <Text style={Styles.labelsCadastro}>Nome</Text>  
            <TextInput style={Styles.input} name="nome" onChangeText={text => setNome(text)} value={getNome}/>
            {errorNome ? (<Text style={Styles.errorMsg}>Digite o nome</Text>) : ''}

            <Text style={Styles.labelsCadastro}>E-mail</Text>  
            <TextInput style={Styles.input} required="true" name="email" onChangeText={text => setEmail(text)} value={getEmail} />
            {errorEmail ? (<Text style={Styles.errorMsg}>Digite o e-mail</Text>) : ''}

            <Text style={Styles.labelsCadastro}>Senha</Text>  
            <TextInput style={Styles.input} secureTextEntry={true} onChangeText={text => setSenha(text)} value={getSenha}/>
            {errorSenha ? (<Text style={Styles.errorMsg}>Digite uma senha</Text>) : ''}

            <Text style={Styles.labelsCadastro}>Repetir Senha</Text>  
            <TextInput style={Styles.input} secureTextEntry={true} onChangeText={text => setSenha(text)} value={getSenha}/>
            
            <Text style={Styles.labelsCadastro}>CPF</Text>  
            <TextInput style={Styles.input} onChangeText={text => setCPF(text)} value={getCPF}/>
            {errorCPF ? (<Text style={Styles.errorMsg}>Digite o CPF</Text>) : ''}

            <TouchableOpacity style={Styles.botaoCadastro} onPress={checkCadastro}>
                <Text style={styles.textoBotao}>Editar</Text>
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
                <TouchableOpacity style={styles.botaoFazerLogin} onPress={handleLogin}>
                    <Text style={styles.textoBotao}>Entendi</Text>
                </TouchableOpacity>
              </View>
              </View>
            </Modal>
        </View>
      );
    }



const styles = StyleSheet.create({  
    main:{
      backgroundColor: "#DFDEE0", 
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center', 
      fontWeight: 'bold'
    },
    titulo:{
      fontWeight: 'bold',
      marginTop: 20,
      marginRight: 160,
      fontSize: 20,
    },
    errorMsg:{
      color: '#A52A2A',
      fontWeight: 'bold',
      fontSize: 15,
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
    },
    descricaoEmAndamento:{
      marginTop: 7,
      fontSize: 16,
      color: '#F0E3E3',
      fontWeight: 'bold',
    },
  });

export default EditarUsuarioScreen;