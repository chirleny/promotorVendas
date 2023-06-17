import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import Axios from 'axios';
import {
    useFonts,
    Montserrat_300Light,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  } from '@expo-google-fonts/montserrat';

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
        Axios.post("http://localhost:3001/promotores").then((response) =>{
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

    let [fontsLoaded] = useFonts({ 
        Montserrat_300Light,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    });
  
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
      Axios.post("http://localhost:3001/cadastroRota", {
        promotor: getPromotorId,
        localizacao: getLocalizacao,
        loja: getLoja,
        duracao: getDuracao
      }).then((response) =>{    
        sucesso = response.data.msg;
        Toast.show({type: 'success', text1: 'Sucesso', text2: 'Rota para o promotor cadastrada com sucesso!'});
        setTimeout(() => {
            navigation.navigate('HomeSupervisor', {
                usuario: usuario
            });
        }, 2000)
      }); 
    };

    return (
        <View style={styles.main}>
          <Text style={styles.titulo}>Cadastrar rota</Text>

            <TextInput style={styles.input} name="loja" placeholder="Loja" onChangeText={text => setLoja(text)} value={getLoja}/>
            {errorLoja ? (<Text style={styles.errorMsg}>Digite a Loja</Text>) : ''}

            <TextInput style={styles.input} required="true" name="endereco" placeholder="Endereço" onChangeText={text => setLocalizacao(text)} value={getLocalizacao} />
            {errorLocalizacao ? (<Text style={styles.errorMsg}>Digite o endereço</Text>) : ''}

            <TextInput style={styles.input} placeholder="Promotor responsável" onClick={handlePromotor} onChangeText={text => setPromotor(text)} value={getPromotor}/>
            {errorPromotor ? (<Text style={styles.errorMsg}>Digite um promotor</Text>) : ''}

            <TextInput style={styles.input} placeholder="Data e Hora" />
            <TextInput style={styles.input} placeholder="Duração" onChangeText={text => setDuracao(text)} value={getDuracao}/>
            {errorDuracao ? (<Text style={styles.errorMsg}>Digite uma duração</Text>) : ''}

            <TextInput style={styles.input} placeholder="Produtos ofertados"/>
           
            <TouchableOpacity style={styles.botaoCadastro} onPress={checkCadastro}>
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
            <View style={styles.modalMain}>
              <View style={styles.modal}>
                <TouchableOpacity onPress={handleCloseModal}>
                <Ionicons style={styles.iconClose} name="close" size={25} />
                </TouchableOpacity>

                <Text style={styles.textoDivs}>Selecionar Promotor</Text>
                <TouchableOpacity style={styles.botaoInfos}>
                  <TextInput style={styles.inputPromotorModal} placeholder="Digite o nome do Promotor" />
                </TouchableOpacity>

                {
                    getData.map((linha, i) => (
                    <View style={styles.box} key={i}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => handleSelectPromotor(linha.nome, linha.id)}>
                                <Ionicons  style={styles.icon} name="person-outline" size={35} />                                
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
        height: '15%',
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
        fontFamily: 'Montserrat_300Light'
    },
    titulo:{
      fontWeight: 'bold',
      marginTop: 20,
      marginRight: 170,
      fontSize: 20,
      fontFamily: 'Montserrat_700Bold'
    },
    lstPromotor:{
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
        fontFamily: 'Montserrat_300Light'
      },
    errorMsg:{
      color: '#A52A2A',
      fontWeight: 'bold',
      fontSize: 15,
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
    inputPromotorModal: {
        width: '100%',
        marginVertical: 10,
        padding: 10,
        marginBottom: 20,
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
      fontFamily: 'Montserrat_600SemiBold'
    },
    modal:{
      backgroundColor: '#DFDEE0', 
      margin: 20,
      padding: 20,
      borderRadius: 10,
      elevation:1,   
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
      fontFamily: 'Montserrat_600SemiBold',
      marginRight: 100,
    },
    descricaoEmAndamento:{
      marginTop: 7,
      fontSize: 16,
      color: '#F0E3E3',
      fontWeight: 'bold',
      fontFamily: 'Montserrat_600SemiBold'
    },

  });

export default CadastroRotaScreen;