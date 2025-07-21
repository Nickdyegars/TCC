import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import Home from './src/screens/home';
import LoginScreen from './src/screens/login';
import Alunos from './src/screens/alunos';
import CadastrarAluno from './src/screens/cadastrarAluno';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <MenuProvider>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Alunos" component={Alunos} />
          <Stack.Screen name="CadastrarAluno" component={CadastrarAluno} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}