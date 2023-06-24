import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screen/LoginScreen';
import SignUpScreen from '../screen/SignUpScreen';
import ConfirmEmailScreen from '../screen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screen/ForgotPasswordScreen';
import NewPasswordScreen from '../screen/NewPasswordScreen';
import HomeScreen from '../screen/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name='LogIn' component={LoginScreen}></Stack.Screen>
        <Stack.Screen name='SignUp' component={SignUpScreen}></Stack.Screen>
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen}></Stack.Screen>
        <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}></Stack.Screen>
        <Stack.Screen name='NewPassword' component={NewPasswordScreen}></Stack.Screen>
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;