import React from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';
import logo from '../assets/logo.png';
import { Button } from 'react-native-elements';

let ProfileScreenWrapper = ({ state, props }) => {
    // console.log('state user email', state.user[0].email);
    let userEmail = state.user[0].email;
    console.log('user email', userEmail);

    let handleSignOut = () => {
        AsyncStorage.removeItem('authorization')
            .then(() => props.navigation.navigate('Login'));  
    };

    return ( 
        <SafeAreaView style={styles.container}>
            <Image source={logo}
                style={styles.logo}
            />
            <Text>
                {
                    userEmail
                }
            </Text>
            <Button
              style={styles.button}
              title='Sign Out'
              color='maroon'
              onPress={handleSignOut}
            />
            
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    //  textfield: {
    //    height: 40, 
    //    width: 300,
    //    margin: 10,
    //    borderColor: 'maroon', 
    //    borderWidth: 1,
    //    borderRadius: 5,
    //    paddingLeft: 10
    //  },
     button: {
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
        fontSize: 15
     }
  });
  

let mapStateToProps = (state, props) => ({ state, props });

let ProfileScreen = connect(mapStateToProps)(ProfileScreenWrapper);

export default ProfileScreen;