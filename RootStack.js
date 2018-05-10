import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

export default RootStack;