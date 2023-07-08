import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from './screens/HomeScreen';
import  LoginScreen  from './screens/LoginScreen';
import  CadastroScreen  from './screens/CadastroScreen';
import  RotaScreen  from './screens/RotaScreen';
import  ModalScreen  from './screens/ModalScreen';
import  RotasConcluidasScreen  from './screens/RotasConcluidasScreen';
import  EditarUsuarioScreen  from './screens/EditarUsuarioScreen';
import  HomeSupervisorScreen  from './screens/HomeSupervisorScreen';
import  CadastroRotaScreen  from './screens/CadastroRotaScreen';
import  CadastroPromotorScreen  from './screens/CadastroPromotorScreen';
import  CheckInScreen  from './screens/CheckInScreen'; 
import  CheckOutScreen  from './screens/CheckOutScreen'; 

const Stack = createNativeStackNavigator(); 

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="Home" component={HomeScreen}  /> 
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Rota" component={RotaScreen} />
        <Stack.Screen name="RotasConcluidas" component={RotasConcluidasScreen} />  
        <Stack.Screen name="EditarUsuario" component={EditarUsuarioScreen} />  
        <Stack.Screen name="HomeSupervisor" component={HomeSupervisorScreen} />  
        <Stack.Screen name="CadastroRota" component={CadastroRotaScreen} />  
        <Stack.Screen name="CadastroPromotor" component={CadastroPromotorScreen} />  
        <Stack.Screen name="CheckIn" component={CheckInScreen} />  
        <Stack.Screen name="CheckOut" component={CheckOutScreen} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;