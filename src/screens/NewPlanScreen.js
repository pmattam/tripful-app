import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';

let NewPlanScreenWrapper = ({ props }) => {
  trip = props.navigation.state.params.trip;
  return(
    <SafeAreaView style={styles.container}>
    <Image source={logo}
    style={styles.logo}
    />
    
    <TouchableOpacity style={styles.to}>
      <Text>Packing Items</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.to} onPress={() => props.navigation.navigate('AddFlight', { trip })}>
      <Text>Flight</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.to}>
      <Text>Car Rental</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.to} onPress={() => props.navigation.navigate('AddHotel', { trip })}>
      <Text>Hotel</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.to}>
      <Text>Activity</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.to}>
      <Text>Snapshot</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.to}>
      <Text>Home Checklist</Text>
    </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
   textfield: {
     height: 40, 
     width: 300,
     margin: 10,
     borderColor: 'maroon', 
     borderWidth: 1,
     borderRadius: 5,
     paddingLeft: 10,
   },
   button: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
   },
   logo: {
       width: 150,
       height: 150,
   },
   font: {
      fontSize: 20,
   },
   to: {
      height: 30
   }
});

let mapStateToProps = (state, props) => ({ state, props });

      
let NewPlanScreen = connect(mapStateToProps)(NewPlanScreenWrapper);

export default NewPlanScreen;