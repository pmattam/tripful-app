import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TripsScreen from './src/screens/TripsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const MainTabNavigator = createBottomTabNavigator({
    Trips: TripsScreen,
    Profile: ProfileScreen
}, {
    navigationOptions: ({ navigation }) => ({
        title: navigation.state.routeName,
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            if (routeName === 'Trips') {
                name = `ios-paper-plane${focused ? '' : '-outline'}`;
            } else if (routeName === 'Profile') {
                name = `ios-person${focused ? '' : '-outline'}`;
            }
            return <Ionicons name = { name }
            size = { 30 }
            color = { tintColor }
            />;
        },
    }),
    tabBarOptions: {
        activeTintColor: '#2EBCFF',
        inactiveTintColor: 'gray',
    }
});

export default MainTabNavigator;