import React from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';


let TripsScreenWrapper = ({ state, props }) => {
  console.log("trips", state.trips)

  let addNewTrip = () => {
    console.log("Adding New Trip");
    props.navigation.navigate('AddTrip')
  };
  return(
    <SafeAreaView style={styles.container}>
        <Image source={logo}
          style={styles.logo}
        />
      {
        state.trips.map(trip => 
            <SafeAreaView style={styles.trip} key={trip.name}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Plans', { trip })}>
                <Text style={styles.textBold}>
                {trip.name}
                </Text>
                <Text style={styles.text}>
                {trip.destination}
                </Text>
                <Text style={styles.text}>
                {trip.startDate}
                </Text>
                <Text style={styles.text}>
                {trip.endDate}
                </Text>
              </TouchableOpacity>
            </SafeAreaView>             
        )
      }
      
      <SafeAreaView style={styles.plus}>
      <TouchableOpacity onPress={addNewTrip}>
      <Ionicons name="ios-add-circle-outline" size={40} color="maroon" />
      </TouchableOpacity>
      </SafeAreaView>
      
    </SafeAreaView>
  )}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    trip: {
      flex: 0.3,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: 50, 
      width: 400,
      margin: 0,
      borderColor: 'maroon', 
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 0,
    },
    logo: {
      width: 150,
      height: 150
    },
    textBold: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    text: {
      fontSize: 20
    },
    plus: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
    }
  });

  let mapStateToProps = (state, props) => ({ state, props });

      
  let TripsScreen = connect(mapStateToProps)(TripsScreenWrapper);

export default TripsScreen;