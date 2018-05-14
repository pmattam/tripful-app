import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import NewTripScreen from './src/screens/NewTripScreen';
import PlansScreen from './src/screens/PlansScreen';
import NewPlanScreen from './src/screens/NewPlanScreen';
import NewHotelScreen from './src/screens/NewHotelScreen';
import NewFlightScreen from './src/screens/NewFlightScreen';
import SnapShotPreviewScreen from './src/screens/SnapShotPreviewScreen';
import MainTabNavigator from './MainTabNavigator';

import MapScreen from './src/screens/MapScreen';

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
}, {
    initialRouteName: 'Login'
});

const AppStack = createStackNavigator({
    MainTabNavigator: {
        screen: MainTabNavigator,
        // navigationOptions: {
        //     title: 'Tripful'
        // }
    },
    AddTrip: {
        screen: NewTripScreen,
        navigationOptions: {
            title: 'AddTrip'
        }
    },
    Plans: {
        screen: PlansScreen,
        navigationOptions: {
            title: 'Plans'
        }
    },
    AddPlan: {
        screen: NewPlanScreen,
        navigationOptions: {
            title: 'AddPlan'
        }
    },
    AddFlight: {
        screen: NewFlightScreen,
        navigationOptions: {
            title: 'AddFlight'
        }
    },
    AddHotel: {
        screen: NewHotelScreen,
        navigationOptions: {
            title: 'AddHotel'
        }
    },
    PreviewImage: {
        screen: SnapShotPreviewScreen,
        navigationOptions: {
            title: 'PreviewImage'
        }
    },
    Map: {
        screen: MapScreen,
        navigationOptions: {
            title: 'Map'
        }
    },
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