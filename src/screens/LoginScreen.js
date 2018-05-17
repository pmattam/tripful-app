import React from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, StyleSheet, TextInput, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import logo from '../assets/logo.png';
import { loginUser } from '../lib/api-calls';
import { addUserToStore } from '../actions/actions';

let LoginScreenWrapper = ({ props, addUserToStore }) => {

  let handleUserLogin = () => {
    if(userInfo.email && userInfo.password) {
      console.log(userInfo);
      loginUser(userInfo)
        .then(res => res.json())
        .then(user => {
          console.log(user);
          if(!user.jwt) {
            alert('Authentication Failed, please try again!');
          } else {
            AsyncStorage.setItem('authorization', user.jwt);
            addUserToStore(user);
            props.navigation.navigate('App');
          }
        });
    }
  };
  
  let userInfo = {};
  
  let handleEmailChange = (value) => {
    userInfo.email = value;
  };
  
  let handlePasswordChange = (value) => {
    userInfo.password = value;
  };

  return(
    <View style={styles.container}>
      <Image source={logo}
      style={styles.logo}
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
      autoCapitalize={'none'} />

      <Button
        title='Sign In'
        color='#06005D'
        fontSize={15}
        fontFamily={'HelveticaNeue-Light'}
        buttonStyle={{
          backgroundColor: '#fff',
          borderColor: '#2EBCFF',
          height: 48,
          width: 100,
          borderRadius: 5,
          borderWidth: 1,
        }}
        onPress={() => handleUserLogin()}
      />

      <View style={styles.register}>
        <Text style={styles.font}>New Member?</Text>
          <Button 
            title="Sign Up"
            color='#06005D'
            fontSize={15}
            fontFamily={'HelveticaNeue-Light'}
            buttonStyle={{
              backgroundColor: '#fff'
            }}
            onPress={() => props.navigation.navigate('SignUp')}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
   textfield: {
     height: 48, 
     width: 300,
     margin: 10,
     borderColor: '#2EBCFF', 
     borderWidth: 1,
     borderRadius: 5,
     paddingLeft: 10
   },
   register: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
   },
  //  signin: {
  //   height: 40,
  //   width: 300,
  //   borderColor: 'lightblue',
  //   borderWidth: 1,
  //   borderRadius: 5
  //  },
   logo: {
       width: 250,
       height: 250
      // borderRadius: 100,
   },
   font: {
      fontSize: 15,
      fontFamily: 'HelveticaNeue-Light',
      color: '#2EBCFF'
   }
  //  button: {
  //    height: 40,
  //    width: 100,
  //    borderWidth: 1,
  //    backgroundColor: 'lightblue',
  //    borderColor: 'lightblue',
  //    borderStyle: 'dotted'
  //  }
});

let mapStateToProps = (state, props) => ({ state, props });

let mapDispatchToProps = dispatch => ({ 
  addUserToStore: (user) => dispatch(addUserToStore(user))
});
      
let LoginScreen = connect(mapStateToProps, mapDispatchToProps)(LoginScreenWrapper);

export default LoginScreen;