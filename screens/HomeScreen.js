import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

function HomeScreen({navigation}) {
    const handleRota = () => {
        navigation.navigate('Rota');
    };
    const handleRotasConcluidas = () => {
      navigation.navigate('RotasConcluidas');
  };

    let [fontsLoaded] = useFonts({
      Montserrat_400Regular,
      Montserrat_600SemiBold,
      Montserrat_700Bold,
    });

    return (    
        <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity onPress={handleRota}>
                  <Ionicons style={styles.icon} name="person-outline" size={35} />
              </TouchableOpacity>
              <Text style={styles.titulo}>Bem-vindo, Fulano</Text> 
            </View>
            <View style={styles.container}>
            
              <View style={styles.box}>                
                <View style={styles.inner}>
                  <TouchableOpacity onPress={handleRota}>
                    <Text style={styles.textoDivs}>Minhas</Text>
                    <Text style={styles.textoDivs}>Rotas de</Text>
                    <Text style={styles.textoDivs}>Hoje</Text>
                  </TouchableOpacity>
                </View>                
              </View>

              <View style={styles.box}>
                <View style={styles.inner}>
                  <TouchableOpacity onPress={handleRotasConcluidas}>
                    <Text style={styles.textoDivs}>Minhas</Text>
                    <Text style={styles.textoDivs}>Rotas</Text>
                    <Text style={styles.textoDivs}>Concluídas</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.textoDivs}>Clientes</Text>
                    <Text style={styles.textoDivs}>Atendidos</Text>
                </View>
              </View>

              <View style={styles.boxReport}>
                <View style={styles.inner}>
                    <Text style={styles.textoDivs}>Meus Relatórios</Text>
                </View>
              </View>

              <View style={styles.boxTitulo}>
                <Text style={styles.tituloRota}>Rota em Andamento</Text>
              </View>

              <View style={styles.boxRota}>
                <View style={styles.inner}>
                  <Text style={styles.textoDivs}>Supermercado Pernambucano</Text>
                  <Text style={styles.descricaoEmAndamento}>Jaboatão dos Guararapes</Text>
                  <Text style={styles.descricaoEmAndamento}>Tempo Restante - 1h30</Text>
                  
                  <TouchableOpacity style={styles.botaoCadastro} onPress={handleRota}>
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
    boxReport:{
        width: '99%',
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
        fontWeight: 'bold',
        fontSize: 17,
        fontFamily: 'Montserrat_600SemiBold'
    },
    descricaoEmAndamento:{
        fontSize: 17,
        color: '#F0E3E3',
        fontFamily: 'Montserrat_400Regular'
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Montserrat_700Bold'
    },
    tituloRota:{
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Montserrat_700Bold'
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
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Montserrat_400Regular'
    },
    icon:{
      padding: 15,
    },
    header:{
      width: '100%',
      height: '15%',
      alignItems: 'center',
      backgroundColor: '#DFDEE0',
      flexDirection:'row'
    },
});

export default HomeScreen;