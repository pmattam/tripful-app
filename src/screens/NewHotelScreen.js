import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, SafeAreaView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import logo from '../assets/logo_2.png';

let NewHotelScreenWrapper = ({ props }) => {

  let handleAddHotel = () => {
    console.log(hotelPlan);
    props.navigation.navigate('Plans', {hotelPlan})
  };
  
  let hotelPlan = {};
  
  let handleHotelNameChange = (value) => {
    hotelPlan.name = value;
  };
  
  let handleConfChange = (value) => {
    hotelPlan.conf = value;
  };

  let handleAddressChange = (value) => {
    hotelPlan.address = value;
  };

  let handlePhoneChange = (value) => {
    hotelPlan.phone = value;
  };

  let handleWebsiteChange = (value) => {
    hotelPlan.site = value;
  };

  let handleCheckInChange = (value) => {
    hotelPlan.checkInDate = value;
  };

  let handleCheckOutChange = (value) => {
    hotelPlan.checkOutDate = value;
  };

  let handleDescChange = (value) => {
    hotelPlan.description = value;
  };

  return(
    <SafeAreaView style={styles.container}>
    <Image source={logo}
    style={styles.logo}
    />

    <TextInput 
      style={styles.textfield} 
      placeholder='Hotel Name'
      onChangeText={handleHotelNameChange}
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
      placeholder='Phone'
      onChangeText={handlePhoneChange}
      autoCorrect={false}
      autoCapitalize={'none'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Website'
      onChangeText={handleWebsiteChange}
      autoCorrect={false}
      autoCapitalize={'none'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Checkin Date'
      onChangeText={handleCheckInChange}
      autoCorrect={false}
      autoCapitalize={'none'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Checkout Date'
      onChangeText={handleCheckOutChange}
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
      onPress={() => handleAddHotel()}
    />
    </SafeAreaView>
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
    height: 48, 
    width: 300,
    margin: 10,
    borderColor: '#2EBCFF', 
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
       width: 100,
       height: 100
   },
   font: {
      fontSize: 15
   }
});

let mapStateToProps = (state, props) => ({ state, props });

let mapDispatchToProps = dispatch => ({ 
});
      
let NewHotelScreen = connect(mapStateToProps, mapDispatchToProps)(NewHotelScreenWrapper);

export default NewHotelScreen;