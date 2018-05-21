console.disableYellowBox = true;
import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import NewTripScreen from './src/screens/NewTripScreen';
import PlansScreen from './src/screens/PlansScreen';
import NewPlanScreen from './src/screens/NewPlanScreen';
import NewHotelScreen from './src/screens/NewHotelScreen';
import NewFlightScreen from './src/screens/NewFlightScreen';
import NewCarRentalScreen from './src/screens/NewCarRentalScreen';
import NewPackingListScreen from './src/screens/NewPackingListScreen';
import NewHomeCheckListScreen from './src/screens/NewHomeCheckListScreen';
import SnapShotPreviewScreen from './src/screens/SnapShotPreviewScreen';
import FlightScreen from './src/screens/FlightScreen';
import MapScreen from './src/screens/MapScreen';
import ActivityMapScreen from './src/screens/ActivityMapScreen';
import Logo from './Logo';

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
            title: 'Sign Up'
        }
    }
}, {
    initialRouteName: 'Login',
    navigationOptions: {
        // headerStyle: {
        //     backgroundColor: '#fff'  
        // },
        headerTitleStyle: {
            // fontFamily: 'HelveticaNeue-Light',
            color: '#06005D',
            fontSize: 15,
            fontWeight: '400'
        }
    }
});

const AppStack = createStackNavigator({
    MainTabNavigator: {
        screen: MainTabNavigator,
        navigationOptions: {
            headerTitle: < Logo / >
        }
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
            title: 'Plans',
            // headerTitle: <PlansLogo />
            // headerTitleStyle: {
            //     color: '#06005D',
            //     fontSize: 15,
            //     fontWeight: '400'
            // }
        }
    },
    AddPlan: {
        screen: NewPlanScreen,
        navigationOptions: {
            title: 'AddPlan'
                // headerTitle: <AddPlanLogo />
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
    AddCar: {
        screen: NewCarRentalScreen,
        navigationOptions: {
            title: 'AddCar'
        }
    },
    AddPackingList: {
        screen: NewPackingListScreen,
        navigationOptions: {
            title: 'AddPackingList'
        }
    },
    AddHomeChecklist: {
        screen: NewHomeCheckListScreen,
        navigationOptions: {
            title: 'AddHomeChecklist'
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
    Activity: {
        screen: ActivityMapScreen,
        navigationOptions: {
            title: 'Activity'
        }
    },
    Flight: {
        screen: FlightScreen,
        navigationOptions: {
            title: 'Flight'
        }
    },
}, {
    initialRouteName: 'MainTabNavigator',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#fff'
        },
        headerTitleStyle: {
            color: '#06005D',
            fontSize: 15,
            fontWeight: '400'
        }
    }
});

let Routes = createSwitchNavigator({
    AuthLoading: LoadingScreen,
    Auth: AuthStack,
    App: AppStack,
}, {
    initialRouteName: 'AuthLoading'
});

export default Routes;