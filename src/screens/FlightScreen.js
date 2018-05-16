import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import logo from '../assets/logo.png';
import flight from '../assets/flight.jpg';

let FlightScreenWrapper = ({ props }) => {
    // console.log("in plans", state);
    console.log("in plans", props.navigation.state.params);
    flightPlan = props.navigation.state.params.flightPlan;
    return(
      <SafeAreaView style={styles.plan} key={flightPlan.conf}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Flight', { flightPlan })}>
          <ImageBackground source={flight} style={styles.bgimg}>
            <Text style={styles.text}>
                Airlines: {flightPlan.airline}
            </Text>
            <Text style={styles.text}>
                Conformation: {flightPlan.conf}
            </Text>
            <Text style={styles.text}>
                Flight Number: {flightPlan.flightNumber}
            </Text>
            <Text style={styles.text}>
                Departure City: {flightPlan.deptCity} 
            </Text>
            <Text style={styles.text}>
                Departure Date: {flightPlan.deptDate}
            </Text>
            <Text style={styles.text}>
                Departure Time: {flightPlan.deptTime}
            </Text>
            <Text style={styles.text}>
                Arrival City: {flightPlan.arrivalCity}
            </Text>
            <Text style={styles.text}>
                Arrival Date: {flightPlan.arrivalDate}
            </Text>
          </ImageBackground>
        </TouchableOpacity>
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
   plan: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 50, 
    width: 400,
    margin: 1,
    borderColor: 'maroon', 
    // borderWidth: 1,
    // borderRadius: 5,
  },
   logo: {
       width: 150,
       height: 150,
       borderRadius: 100,
   },
   text: {
    //  flex:1,
    fontSize: 20,
    color: 'maroon',
   },
   font: {
      fontSize: 15
   },
   bgimg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 700,
    borderColor: 'maroon', 
  }
});

let mapStateToProps = (state, props) => ({ state, props });

let mapDispatchToProps = dispatch => ({ 
});
      
let FlightScreen = connect(mapStateToProps, mapDispatchToProps)(FlightScreenWrapper);

export default FlightScreen;