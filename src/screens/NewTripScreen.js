import React from 'react';
import { connect } from 'react-redux';
import { 
  Button,
  DatePickerIOS, 
  Image,
  SafeAreaView, 
  StyleSheet, 
  Text,
  TextInput,
  View 
} from 'react-native';
import { addTripToStore } from '../actions/actions';
import logo from '../assets/logo.png';

let NewTripScreenWrapper = ({ props, addTripToStore }) => {

  let handleAddTrip = () => {
    console.log(trip);
    addTripToStore(trip);
    props.navigation.navigate('Trips');
  };
  
  let trip = {};
  trip.plans = {};
  trip.plans.flightPlans = [];
  trip.plans.hotelPlans = [];
  trip.plans.carPlans = [];
  trip.plans.packingPlans = [];
  trip.plans.activityPlans = [];
  trip.plans.snapshots = [];
  trip.plans.homeCheckPlans = [];
  
  let handleTripNameChange = (value) => {
    trip.name = value;
  };
  
  let handleSourceChange = (value) => {
    trip.source = value;
  };

  let handleDestChange = (value) => {
    trip.destination = value;
  };

  let handleStartDateChange = (dateValue) => {
    trip.startDate = dateValue;
    console.log('start date', dateValue);
    console.log('trip obj', trip);
  };

  let handleEndDateChange = (dateValue) => {
    // trip.endDate = value;
    console.log('end date', dateValue);
    trip.endDate = dateValue;
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
        autoCapitalize={'characters'} />

      <TextInput 
        style={styles.textfield} 
        placeholder='Source'
        onChangeText={handleSourceChange}
        autoCorrect={false}
        autoCapitalize={'words'} />

      <TextInput 
        style={styles.textfield} 
        placeholder='Destination'
        onChangeText={handleDestChange}
        autoCorrect={false}
        autoCapitalize={'words'} />

      {/* <View style={styles.datePickerBox}> 
        <DatePickerIOS
          date={new Date()}
          mode='date'
          placeholder='Start Date'
          format='MM-DD-YYYY'
          onDateChange={handleStartDateChange}
        />
      </View> */}

      <TextInput 
        style={styles.textfield} 
        placeholder='Start Date'
        onChangeText={handleStartDateChange}
        autoCorrect={false}
        autoCapitalize={'none'} 
      />

      <TextInput 
        style={styles.textfield} 
        placeholder='End Date'
        onChangeText={handleEndDateChange}
        autoCorrect={false}
        autoCapitalize={'none'} 
      />

      <TextInput 
        style={styles.textfield} 
        placeholder='Description'
        onChangeText={handleDescChange}
        autoCorrect={false}
        autoCapitalize={'words'} 
      />

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
       height: 150,
       borderRadius: 100,
   },
   font: {
      fontSize: 15
   },
   datePickerBox: {
     width: 300,
     height: 300
   }
});

let mapStateToProps = (state, props) => ({ state, props });

let mapDispatchToProps = dispatch => ({ 
  addTripToStore: (trip) => dispatch(addTripToStore(trip))
});
      
let NewTripScreen = connect(mapStateToProps, mapDispatchToProps)(NewTripScreenWrapper);

export default NewTripScreen;