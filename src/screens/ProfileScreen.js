import React from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, StyleSheet, Text, SafeAreaView, Image, View, Button } from 'react-native';
import logo from '../assets/logo.png';
// import { Button } from 'react-native-elements';
import { clearStore } from '../actions/actions';
 
let ProfileScreenWrapper = ({ user, props, clearStore }) => {

    console.log("user", user);

    let handleSignOut = () => {
        AsyncStorage.removeItem('authorization')
            .then(() => clearStore())
            .then(() => props.navigation.navigate('Login'));  
    };
    
    return ( 
        <SafeAreaView style={styles.container}>
            <Image source={logo}
                style={styles.logo}
            />
            <Text>
                {
                    user.email
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
     button: {
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center'
     },
     logo: {
         width: 150,
         height: 150,
         borderRadius: 100
     },
     font: {
        fontSize: 15
     }
  });
  

let mapStateToProps = (state, props) => ({ user: state.user, props });

let mapDispatchToProps = dispatch => ({ clearStore: () => dispatch(clearStore()) });

let ProfileScreen = connect(mapStateToProps, mapDispatchToProps)(ProfileScreenWrapper);

export default ProfileScreen;