import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import logo from '../assets/logo.png';
import { newUserSignUp } from '../lib/api-calls';

let SignUpScreenWrapper = ({ props }) => {

    let userInfo = {};

    let handleNameChange = (value) => {
        console.log(value);
        userInfo.username = value;
    };

    let handleEmailChange = (value) => {
        console.log(value);
        userInfo.email = value;
    };

    let handlePasswordChange = (value) => {
        console.log(value);
        userInfo.password = value;
    };

    let handleLocationChange = (value) => {
        console.log(value);
        userInfo.location = value;
    };

    let handleUserSignUp = () => {
        if(userInfo.username && userInfo.email && userInfo.password && userInfo.location) {
            newUserSignUp(userInfo)
            .then(res => res.json())
            .then(result => {
                if(result.status === 'success') {
                   console.log(result.status);
                   props.navigation.navigate('Login');
                } else {
                    alert('Failed to Register New User');
                }
             })
        } else {
            console.log('Enter valid Info');
        }
    };
    
    return (
        <View style={styles.container}>
            <Image 
                source={logo}
                style={styles.logo}
            />
            <TextInput
                style={styles.textfield}
                placeholder='Username'
                onChangeText={handleNameChange}
                autoCorrect={false}
                autoCapitalize={'none'}
            />
            <TextInput 
                style={styles.textfield}
                placeholder='Email'
                onChangeText={handleEmailChange}
                autoCorrect={false}
                autoCapitalize={'none'}
                keyboardType='email-address'
            />
            <TextInput
                style={styles.textfield}
                placeholder='Password'
                onChangeText={handlePasswordChange}
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize={'none'}
            />
            <TextInput
                style={styles.textfield}
                placeholder='Location'
                onChangeText={handleLocationChange}
                autoCorrect={false}
                autoCapitalize={'none'}
            />
            <Button
                style={styles.register}
                title='Sign Up'
                color='maroon'
                onPress={() => handleUserSignUp()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    textfield: {
        height: 40, 
        width: 300,
        margin: 10,
        borderColor: 'maroon', 
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10
    },
    register: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
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
      
let SignUpScreen = connect(mapStateToProps)(SignUpScreenWrapper);

export default SignUpScreen;