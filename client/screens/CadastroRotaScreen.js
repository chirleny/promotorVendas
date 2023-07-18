import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import Axios from 'axios';
import Styles from './Styles.js'

function CadastroRotaScreen({route, navigation}) {
    let sucesso = 'Rota cadastrado com sucesso!';
    const { usuario } = route.params;
    const [getData, setData] = useState([]);
    const [getLoja,setLoja] = useState();
    const [getLocalizacao,setLocalizacao] = useState();
    const [getPromotor,setPromotor] = useState();
    const [getPromotorId,setPromotorId] = useState();
    const [getDuracao,setDuracao] = useState();    

    const [modalVisible, setModalVisible] = useState(false);
    const [errorPromotor, setErrorPromotor] = useState(false);
    const [errorLoja, setErrorLoja] = useState(false);
    const [errorLocalizacao, setErrorLocalizacao] = useState(false);
    const [errorDuracao, setErrorDuracao] = useState(false);

    const handlePromotor = () => {
      console.log('#######');
        Axios.post("http://192.168.10.3:3001/promotores").then((response) =>{
          console.log('¨¨¨¨¨ ' + JSON.stringify(response.data.promotores));
            setData(response.data.promotores);
            setModalVisible(true);
        });         
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleSelectPromotor = (nome, id) => {
        setPromotor(nome);
        setPromotorId(id);
        setModalVisible(false);
    };
  
    const checkCadastro = (values) => {  
        var lojaVazia = getLoja == undefined || getLoja == '' ? true : false;
        setErrorLoja(lojaVazia);

        var promotorVazio = getPromotor == undefined || getPromotor == '' ? true : false;
        setErrorPromotor(promotorVazio);

        var localizacaoVazia = getLocalizacao == undefined || getLocalizacao == '' ? true : false;
        setErrorLocalizacao(localizacaoVazia);

        var duracaoVazia = getDuracao == undefined || getDuracao == '' ? true : false;
        setErrorDuracao(duracaoVazia);

        if(!lojaVazia && !promotorVazio && !localizacaoVazia && !duracaoVazia){
            handleCadastro();
        }
    };

    const handleCadastro = (values) => {
      Axios.post("http://192.168.10.3:3001/cadastroRota", {
        promotor: getPromotorId,
        localizacao: getLocalizacao,
        loja: getLoja,
        duracao: getDuracao
      }).then((response) =>{    
        sucesso = response.data.msg;
        Toast.show({type: 'success', text1: 'Sucesso', text2: 'Rota para o promotor cadastrada com sucesso!'});
        /*setTimeout(() => {
            navigation.navigate('HomeSupervisor', {
                usuario: usuario
            });
        }, 2000)*/
      }); 
    };

    return (
        <View style={Styles.main}>
          <Text style={Styles.titulo}>Cadastrar rota</Text>

            <TextInput style={Styles.input} name="loja" placeholder="Loja" onChangeText={text => setLoja(text)} value={getLoja}/>
            {errorLoja ? (<Text style={styles.errorMsg}>Digite a Loja</Text>) : ''}

            <TextInput style={Styles.input} required="true" name="endereco" placeholder="Endereço" onChangeText={text => setLocalizacao(text)} value={getLocalizacao} />
            {errorLocalizacao ? (<Text style={styles.errorMsg}>Digite o endereço</Text>) : ''}

            <TextInput style={Styles.input} placeholder="Promotor responsável" onFocus={handlePromotor} onChangeText={text => setPromotor(text)} value={getPromotor}/>
            {errorPromotor ? (<Text style={styles.errorMsg}>Digite um promotor</Text>) : ''}

            <TextInput style={Styles.input} placeholder="Data e Hora" />
            <TextInput style={Styles.input} placeholder="Duração" onChangeText={text => setDuracao(text)} value={getDuracao}/>
            {errorDuracao ? (<Text style={styles.errorMsg}>Digite uma duração</Text>) : ''}
           
            <TouchableOpacity style={Styles.botaoCadastro} onPress={checkCadastro}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
            <Toast />
            <Modal
            visible={modalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={() => {
              setModalVisible(false);
          }}>
            <View style={Styles.modalMain}>
              <View style={Styles.modal}>
                <TouchableOpacity onPress={handleCloseModal}>
                <Ionicons style={styles.iconClose} name="close" size={25} />
                </TouchableOpacity>

                <Text style={styles.textoDivs}>Selecionar Promotor</Text>
                <TouchableOpacity style={styles.botaoInfos}>
                  <TextInput style={Styles.inputPromotorModal} placeholder="Digite o nome do Promotor" />
                </TouchableOpacity>

                {
                    getData.map((linha, i) => (
                    <View style={styles.box} key={i}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => handleSelectPromotor(linha.nome, linha.id)}>
                                <Ionicons style={styles.icon} name="person-outline" size={35} />                                
                            </TouchableOpacity>     
                            <TouchableOpacity onPress={() => handleSelectPromotor(linha.nome, linha.id)}>
                                <Text style={styles.lstPromotor}>{linha.nome}</Text>   
                            </TouchableOpacity>                     
                        </View>                     
                    </View>                    
                    
                    ))
                }   

              </View>
              </View>
            </Modal>
        
        </View>
      );
    }



const styles = StyleSheet.create({  
    header:{
        width: '100%',
        //height: '15%',
        alignItems: 'center',
        backgroundColor: '#DFDEE0',
        flexDirection:'row'
      },
    main:{
      backgroundColor: "#DFDEE0", 
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center', 
      fontWeight: 'bold'
    },
    icon:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    titulo:{
      fontWeight: 'bold',
      marginTop: 20,
      marginRight: 170,
      fontSize: 20,
    },
    lstPromotor:{
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
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
    iconClose:{
        paddingLeft: 250,
        elevation: 1,
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

    textoDivs:{
      fontWeight: 'bold',
      fontSize: 17,
      marginRight: 100,
    },
    descricaoEmAndamento:{
      marginTop: 7,
      fontSize: 16,
      color: '#F0E3E3',
      fontWeight: 'bold',
    },

  });

export default CadastroRotaScreen;