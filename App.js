import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from './screens/HomeScreen';
import  LoginScreen  from './screens/LoginScreen';
import  CadastroScreen  from './screens/CadastroScreen';
import  RotaScreen  from './screens/RotaScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Rota" component={RotaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;