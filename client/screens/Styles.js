import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    labelsCadastro:{
        color:'white'
    },

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
        marginRight: 205,
        fontSize: 20,
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingTop: 40,
        //fontFamily: 'Montserrat_700Bold'
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
        //fontFamily: 'Montserrat_300Light'
      },

      map: {
        height: '100%'
      }
    

})