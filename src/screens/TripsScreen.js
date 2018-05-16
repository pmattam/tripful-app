import React from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import logo from '../assets/logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import trip1 from '../assets/trip1.jpg';
// import { green } from 'ansi-colors';

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
                <ImageBackground source={trip1}
                  style={styles.snapshot}>
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
                </ImageBackground>
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
      alignItems: 'center',
      justifyContent: 'center',
      height: 100, 
      width: 400,
      // margin: 10,
      borderColor: 'maroon', 
      // borderWidth: 1,
      // borderRadius: 5,
    },
    logo: {
      width: 150,
      height: 150,
      borderRadius: 100,
    },
    textBold: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    text: {
      fontSize: 20,
      color: 'white',
    },
    plus: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    snapshot: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 500,
      height: 100,
      paddingRight: 5,
      borderColor: 'maroon', 
    }
  });

  let mapStateToProps = (state, props) => ({ state, props });

      
  let TripsScreen = connect(mapStateToProps)(TripsScreenWrapper);

export default TripsScreen;