import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    labelsCadastro:{
        marginBottom: -20,
        marginLeft: 25
    },

    main:{
        backgroundColor: "#DFDEE0", 
        flex: 1,
        fontWeight: 'bold'
    },

    titulo:{
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 20,
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingTop: 60,
        paddingBottom: 60,
      },

      input: {
        width: '85%',
        marginVertical: 20,
        marginLeft: 25,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //flex: 1,
        backgroundColor: '#FFFDFD',
        //fontFamily: 'Montserrat_300Light'
      },

      map: {
        height: '100%'
      },
      
      botaoCadastro: {
        width: '85%',
        backgroundColor: '#0C0B0B',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007bff',
        marginTop: 10,
        marginBottom: 30,
        marginLeft: 25,
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
        backgroundColor: '#FFFDFD',
      },
    
      modalMain:{
        backgroundColor: 'rgba(0,0,0,0.5)',    
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },

      modal:{
        backgroundColor: '#DFDEE0', 
        margin: 20,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',   
      },
      errorMsg:{
        color: '#A52A2A',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 25,
        marginTop: -20,
        paddingBottom: 20,
      },
      textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
      },
})