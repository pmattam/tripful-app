import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, SafeAreaView, Button, Image } from 'react-native';
import { addTripToStore } from '../actions/actions';
import logo from '../assets/logo.png';

let NewTripScreenWrapper = ({ props, addTripToStore }) => {

  let handleAddTrip = () => {
    console.log(trip);
    addTripToStore(trip);
    props.navigation.navigate('Trips')
  };
  
  let trip = {};
  
  let handleTripNameChange = (value) => {
    trip.name = value;
  };
  
  let handleSourceChange = (value) => {
    trip.source = value;
  };

  let handleDestChange = (value) => {
    trip.destination = value;
  };

  let handleStartDateChange = (value) => {
    trip.startDate = value;
  };

  let handleEndDateChange = (value) => {
    trip.endDate = value;
  };

  let handleDescChange = (value) => {
    trip.description = value;
  };

  return(
    <SafeAreaView style={styles.container}>
    <Image source={logo}
    style={styles.logo}
    />

    <TextInput 
      style={styles.textfield} 
      placeholder='TripName'
      onChangeText={handleTripNameChange}
      autoCorrect={false}
      autoCapitalize={'none'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Source'
      onChangeText={handleSourceChange}
      autoCorrect={false}
     autoCapitalize={'none'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Destination'
      onChangeText={handleDestChange}
      autoCorrect={false}
      autoCapitalize={'none'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='Start Date'
      onChangeText={handleStartDateChange}
      autoCorrect={false}
      autoCapitalize={'none'} />

    <TextInput 
      style={styles.textfield} 
      placeholder='End Date'
      onChangeText={handleEndDateChange}
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
      onPress={() => handleAddTrip()}
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
       height: 150
   },
   font: {
      fontSize: 15
   }
});

let mapStateToProps = (state, props) => ({ state, props });

let mapDispatchToProps = dispatch => ({ 
  addTripToStore: (trip) => dispatch(addTripToStore(trip))
});
      
let NewTripScreen = connect(mapStateToProps, mapDispatchToProps)(NewTripScreenWrapper);

export default NewTripScreen;