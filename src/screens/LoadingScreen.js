import React from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, StyleSheet, Text, View, Image } from 'react-native';
import logo from '../assets/logo.png';

let LoadingScreenWrapper = ({ props }) => {

    let navigateByToken = async() => {
        const userToken = await AsyncStorage.getItem('authorization');
        console.log(userToken);
        console.log("props", props);
        props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    navigateByToken();

    return (
        <View style={styles.container}>
        <Image source={logo}
        style={styles.logo}
        /> 
        <Text style={styles.font}> Welcome to Tripful! </Text> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    font: {
        fontSize: 15,
    }
});

let mapStateToProps = (state, props) => ({ state, props });

let LoadingScreen = connect(mapStateToProps)(LoadingScreenWrapper);

export default LoadingScreen;