import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function HomeSupervisorScreen({route, navigation}) {
      
  /*useEffect(()=>{    
    console.log(JSON.stringify(usuario));
    })*/
    const { usuario } = route.params;

    const [modalVisible, setModalVisible] = useState(false);

    const handleRota = () => {
      navigation.navigate('Rota', {
        usuario: usuario
      });
    };
    const handleRotasConcluidas = () => {
      navigation.navigate('RotasConcluidas');
    };

    const handleCadastroPromotor = () => {
      navigation.navigate('CadastroPromotor', {
        usuario: usuario
      });
    };

    const handleRotasCadastradas = () => {
      navigation.navigate('CadastroRota', {
        usuario: usuario
      });
    };

    const handleEditUser = () => {
      navigation.navigate('EditarUsuario', {
        usuario: usuario
      });
    };

    const handleModal = () => {
      setModalVisible(true);
    };

    const handleCloseModal = () => {
      setModalVisible(false);
    };

    return (    
        <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity onPress={handleEditUser}>
                  <Ionicons style={styles.icon} name="person-outline" size={35} />
              </TouchableOpacity>
              <Text style={styles.titulo}>Bem-vindo, {usuario.nome}</Text> 
            </View>
            <View style={styles.container}>

                
              <View style={styles.boxReportCadastro}>                
                  <View style={styles.innerSupervisor}>
                    <TouchableOpacity onPress={handleRotasCadastradas}>
                      <Text style={styles.textoDivsCadastro}>Cadastrar Rota</Text>
                    </TouchableOpacity>
                  </View>                
              </View>

              <View style={styles.boxReportCadastro}>
                <View style={styles.innerSupervisor}>
                  <TouchableOpacity onPress={handleCadastroPromotor}>
                    <Text style={styles.textoDivsCadastro}>Cadastrar Promotor</Text>
                  </TouchableOpacity>
                </View>
              </View>
            
              <View style={styles.box}>                
                <View style={styles.inner}>
                  <TouchableOpacity onPress={handleRota}>
                    <Text style={styles.textoDivs}>Rotas da</Text>
                    <Text style={styles.textoDivs}>Minha</Text>
                    <Text style={styles.textoDivs}>Equipe</Text>
                  </TouchableOpacity>
                </View>                
              </View>

              <View style={styles.box}>
                <View style={styles.inner}>
                  <TouchableOpacity onPress={handleRotasConcluidas}>
                    <Text style={styles.textoDivs}>Meus</Text>
                    <Text style={styles.textoDivs}>Promotores</Text>
                    <Text style={styles.textoDivs}>de Vendas</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.textoDivs}>Meus</Text>
                    <Text style={styles.textoDivs}>Clientes</Text>
                </View>
              </View>

              <View style={styles.boxTitulo}>
                <Text style={styles.tituloRota}>Métricas da Equipe</Text>
              </View>

              <View style={styles.boxRota}>
                <View style={styles.inner}>
                  <Text style={styles.textoDivs}>Supermercado Pernambucano</Text>
                  <Text style={styles.descricaoEmAndamento}>Jaboatão dos Guararapes</Text>
                  <Text style={styles.descricaoEmAndamento}>Tempo Restante - 1h30</Text>
                  
                  <TouchableOpacity style={styles.botaoCadastro} onPress={handleModal}>
                      <Text style={styles.textoBotao}>Visualizar Ações</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#DFDEE0',
    },
    modalMain:{
      backgroundColor: 'rgba(0,0,0,0.5)',    
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    modal:{
      backgroundColor: '#DFDEE0', 
      margin: 20,
      padding: 50,
      borderRadius: 10,
      elevation:1,   
      alignItems: 'center',
      //justifyContent: 'center',   
    },
    box:{
        width: '33%',
        height: '50%',
        padding: 5,
    },
    inner:{
        flex: 1,
        backgroundColor: '#68A54C',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    innerSupervisor:{
        flex: 1,
        backgroundColor: '#393C37',
        color: '#FFF9F9',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    boxReport:{
        width: '99%',
        height: '15%',
        padding: 10,
    },
    boxReportCadastro:{
        width: '50%',
        height: '15%',
        padding: 10,
    },
    boxTitulo:{
      width: '100%',
      height: '12%',
      padding: 18,
    },
    boxRota:{
        width: '99%',
        height: '35%',
        padding: 5,
    },
    textoDivs:{
        fontSize: 15,
    },
    textoDivsCadastro:{
        fontSize: 14,
        color: '#FFF9F9',
    },
    descricaoEmAndamento:{
        fontSize: 17,
        paddingBottom: 10,
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    tituloRota:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    botaoCadastro: {
        width: '85%',
        height: 35,
        backgroundColor: '#0C0B0B',
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 15,
        borderColor: '#007bff',
    },
    botaoInfos: {
      width: '85%',
      height: 35,
      backgroundColor: '#DFDEE0',
      padding: 8,
      borderRadius: 5,
      borderWidth: 1,
      marginTop: 15,
      borderColor: '#0C0B0B',
    },
    botaoFinalizar: {
      width: '85%',
      height: 35,
      backgroundColor: '#68A54C',
      padding: 8,
      borderRadius: 5,
      borderWidth: 1,
      marginTop: 15,
      borderColor: '#0C0B0B',
},
  textoBotaoInfos: {
    color: '#0C0B0B',
    fontWeight: 'bold',
    textAlign: 'center',
  },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    icon:{
      padding: 15,
    },
    iconClose:{
      paddingLeft: 250,
      elevation: 1,
    },
    header:{
      width: '100%',
      height: '15%',
      alignItems: 'center',
      backgroundColor: '#DFDEE0',
      flexDirection:'row'
    },
});

export default HomeSupervisorScreen;