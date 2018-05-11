import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, View, Button, Image } from 'react-native';
import { AsyncStorage } from 'react-native';
import { loginUser } from '../lib/api-calls';
import { addUserToStore } from '../actions/actions';
import logo from '../assets/logo.png';

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
          }
        })
        .then(() => props.navigation.navigate('App'));
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

    <View style={styles.register}>
      <Text style={styles.font}>New Member?</Text>
        <Button 
          title="Sign Up"
          style={styles.button}
          onPress={() => props.navigation.navigate('SignUp')}
        />
    </View>

    <Button
      style={styles.register}
      title="Sign In"
      color="maroon"
      onPress={() => handleUserLogin()}
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
  // text: {
  //     fontSize: 20,
  //     fontWeight: 'bold'
  // },
   textfield: {
     height: 40, 
     width: 300,
     margin: 10,
     borderColor: 'maroon', 
     borderWidth: 1,
     borderRadius: 5,
     paddingLeft: 10,
    //  backgroundColor: '#F3FAF5'
    // backgroundColor: '#fff'
   },
   register: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
   },
   signin: {
    height: 40,
    width: 300,
    borderColor: 'maroon',
    borderWidth: 1,
    borderRadius: 5
   },
   logo: {
       width: 150,
       height: 150
   },
   font: {
      fontSize: 15,
   }
});

let mapStateToProps = (state, props) => ({ state, props });

let mapDispatchToProps = dispatch => ({ 
  addUserToStore: (user) => dispatch(addUserToStore(user))
});
      
let LoginScreen = connect(mapStateToProps, mapDispatchToProps)(LoginScreenWrapper);

export default LoginScreen;