import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login';
import { StatusBar } from 'react-native';
// import Home from './src/screens/home';
import { MenuProvider } from 'react-native-popup-menu';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <MenuProvider>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* <Stack.Screen name="Home" component={Home} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}