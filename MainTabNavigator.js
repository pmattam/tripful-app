import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import TripsScreen from './src/screens/TripsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const MainTabNavigator = createBottomTabNavigator({
    Trips: {
        screen: TripsScreen,
        navigationOptions: {
            title: 'Trips',
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            title: 'Profile',
        }
    }
});

export default MainTabNavigator;