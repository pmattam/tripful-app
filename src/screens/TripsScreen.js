import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import logo from '../assets/logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import trip1 from '../assets/trip1.jpg';
import trip2 from '../assets/trip2.jpg';
import trip3 from '../assets/trip3.jpg';
import trip4 from '../assets/trip4.jpg';
import { getAllTrips } from '../lib/api-calls';
import { loadTripsToStore } from '../actions/actions';

class TripsScreenWrapper extends Component {

  componentDidMount = () => {
    getAllTrips(this.props.user.jwt) 
      .then(res => res.json())
      .then(trips => {
        console.log(trips);
          this.props.loadTripsToStore(trips);
      });
  };

  IMAGES = {
    trip0: trip1,
    trip1: trip3,
    trip2: trip2,
    trip3: trip4
  };
  getImage = (num) => { // dynamically invoked
    return this.IMAGES['trip' + num];
  };

  render() {
    let trips = this.props.trips;
    console.log('Inside Trips', trips);
   
    let addNewTrip = () => {
      console.log("Adding New Trip");
      this.props.navigation.navigate('AddTrip')
    };
    return(
      <SafeAreaView style={styles.container}>
        {/* <Image source={logo}
          style={styles.logo}
        /> */}
      {
        trips.map((trip, i) => 
            <SafeAreaView style={styles.trip} key={trip.name}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Plans', { trip })}> 
                <ImageBackground source={this.getImage(i)}
                  style={styles.snapshot}>
                  <Text style={styles.textBold}>
                    {trip.name}
                  </Text>
                  <Text style={styles.text}>
                    {trip.destination}
                  </Text>
                  <Text style={styles.text}>
                    {trip.startdate.substring(0, 10)}
                  </Text>
                  <Text style={styles.text}>
                    {trip.enddate.substring(0, 10)}
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </SafeAreaView>             
        )
      }
      
      <SafeAreaView style={styles.plus}>
      <TouchableOpacity onPress={addNewTrip}>
      <Ionicons name="ios-add-circle-outline" size={40} color="#06005D" />
      </TouchableOpacity>
      </SafeAreaView>
      
    </SafeAreaView>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  trip: {
    flex: 0.3,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100, 
    width: 400,
    borderColor: 'skyblue',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  textBold: {
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 20,
    color: 'white',
  },
  plus: {
    flex: 1,
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

  let mapStateToProps = (state) => ({ user: state.user, trips: state.trips });

  let mapDispatchToProps = dispatch => ({ 
    loadTripsToStore: (trips) => dispatch(loadTripsToStore(trips))
  });
      
  let TripsScreen = connect(mapStateToProps, mapDispatchToProps)(TripsScreenWrapper);

export default TripsScreen;