import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, SafeAreaView, Button, Image } from 'react-native';
import logo from '../assets/logo.png';

let NewFlightScreenWrapper = ({ props }) => {

  let handleAddFlight = () => {
    console.log(flightPlan);
    // trip = props.navigation.state.params.trip;
    // console.log(trip);
    props.navigation.navigate('Plans', {flightPlan})
  };
  
  let flightPlan = {};
  
  let handleDeptCityhange = (value) => {
    flightPlan.deptCity = value;
  };
  
  let handleConfChange = (value) => {
    flightPlan.conf = value;
  };

  let handleAirlineChange = (value) => {
    flightPlan.airline = value;
  };

  let handleFlightNumberChange = (value) => {
    flightPlan.flightNumber = value;
  };

  let handleDeptDateChange = (value) => {
    flightPlan.deptDate = value;
  };

  let handleDeptTimeChange = (value) => {
    flightPlan.deptTime = value;
  };

  let handleArrivalCityChange = (value) => {
    flightPlan.arrivalCity = value;
  };

  let handleArrivalDateChange = (value) => {
    flightPlan.arrivalDate = value;
  };

  return(
    <SafeAreaView style={styles.container}>
    <Image source={logo}
    style={styles.logo}
    />


    <TextInput 
      style={styles.textfield} 
      placeholder='Airline'
      onChangeText={handleAirlineChange}
      autoCorrect={false}
      autoCapitalize={'none'} />
      
    <TextInput 
      style={styles.textfield} 
      placeholder='Confirmation Number'
      onChangeText={handleConfChange}
      autoCorrect={false}
     autoCapitalize={'characters'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Departure City'
      onChangeText={handleDeptCityhange}
      autoCorrect={false}
      autoCapitalize={'none'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Departure Date'
      onChangeText={handleDeptDateChange}
      autoCorrect={false}
      autoCapitalize={'none'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Flight Number'
      onChangeText={handleFlightNumberChange}
      autoCorrect={false}
      autoCapitalize={'none'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Departure Time'
      onChangeText={handleDeptTimeChange}
      autoCorrect={false}
      autoCapitalize={'none'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Arrival City'
      onChangeText={handleArrivalCityChange}
      autoCorrect={false}
      autoCapitalize={'none'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Arrival Date'
      onChangeText={handleArrivalDateChange}
      autoCorrect={false}
      autoCapitalize={'none'} />

    <Button
      style={styles.button}
      title="Save"
      color="maroon"
      onPress={() => handleAddFlight()}
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
       height: 150,
       borderRadius: 100,

   },
   font: {
      fontSize: 15
   }
});

let mapStateToProps = (state, props) => ({ state, props });

let mapDispatchToProps = dispatch => ({ 
});
      
let NewFlightScreen = connect(mapStateToProps, mapDispatchToProps)(NewFlightScreenWrapper);

export default NewFlightScreen;