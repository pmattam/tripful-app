import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MainTabNavigator from './MainTabNavigator';

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Login'
        }
    },
    SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
            title: 'SignUp'
        }
    }
});

const AppStack = createStackNavigator({
    MainTabNavigator: {
        screen: MainTabNavigator,
        navigationOptions: {
            title: 'Tripful'
        }
    }
}, {
    initialRouteName: 'MainTabNavigator'
});

let Routes = createSwitchNavigator({
    AuthLoading: LoadingScreen,
    Auth: AuthStack,
    App: AppStack,
}, {
    initialRouteName: 'AuthLoading'
});

export default Routes;