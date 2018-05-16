import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, SafeAreaView, Button, Image } from 'react-native';
import logo from '../assets/logo.png';

let NewCarRentalScreenWrapper = ({ props }) => {

  let handleAddCarRental = () => {
    console.log(carRental);
    props.navigation.navigate('Plans', {carRental});
  };
  
  let carRental = {};
  
  let handleRentalCompanyChange = (value) => {
    carRental.name = value;
  };
  
  let handleConfChange = (value) => {
    carRental.conf = value;
  };

  let handleAddressChange = (value) => {
    carRental.address = value;
  };

  let handlePickUpDateChange = (value) => {
    carRental.pickUpDate = value;
  };

  let handleDropOffDateChange = (value) => {
    carRental.dropOffDate = value;
  };

  let handleDescChange = (value) => {
    carRental.description = value;
  };


  return(
    <SafeAreaView style={styles.container}>
    <Image source={logo}
    style={styles.logo}
    />

    <TextInput 
      style={styles.textfield} 
      placeholder='Rental Company'
      onChangeText={handleRentalCompanyChange}
      autoCorrect={false}
      autoCapitalize={'words'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Confirmation Number'
      onChangeText={handleConfChange}
      autoCorrect={false}
     autoCapitalize={'characters'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Address'
      onChangeText={handleAddressChange}
      autoCorrect={false}
      autoCapitalize={'words'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Pick Up Date'
      onChangeText={handlePickUpDateChange}
      autoCorrect={false}
      autoCapitalize={'none'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Drop Off Date'
      onChangeText={handleDropOffDateChange}
      autoCorrect={false}
      autoCapitalize={'none'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Description'
      onChangeText={handleDescChange}
      autoCorrect={false}
      autoCapitalize={'none'} />

    <Button
      style={styles.button}
      title="Save"
      color="maroon"
      onPress={handleAddCarRental}
    />
    </SafeAreaView>
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
        height: 40,
        width: 300,
        margin: 10,
        borderColor: 'maroon',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 150,
        height: 150
    },
    font: {
        fontSize: 15
    }
});

let mapStateToProps = (state, props) => ({ state, props });

let NewCarRentalScreen = connect(mapStateToProps)(NewCarRentalScreenWrapper);

export default NewCarRentalScreen;