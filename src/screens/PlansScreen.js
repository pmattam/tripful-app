import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import logo from '../assets/logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import packing from '../assets/packing.jpg';
import flight from '../assets/flight.jpg';
import hotel from '../assets/hotel.jpg';
import car from '../assets/car.jpg';
import home from '../assets/home.jpg';

let PlansScreenWrapper = ({ props }) => {
  // console.log("in plans", state);
  console.log("in plans", props.navigation.state.params);
  trip = props.navigation.state.params.trip;
  if (props.navigation.state.params.hotelPlan) {
    if (trip.plans.hotelPlans.indexOf(props.navigation.state.params.hotelPlan) == -1) {
      trip.plans.hotelPlans.push(props.navigation.state.params.hotelPlan);
    }
  };
  if (props.navigation.state.params.flightPlan) {
    if (trip.plans.flightPlans.indexOf(props.navigation.state.params.flightPlan) == -1) {
      trip.plans.flightPlans.push(props.navigation.state.params.flightPlan);
    }
  };
  if (props.navigation.state.params.carRental) {
    if (trip.plans.carPlans.indexOf(props.navigation.state.params.carRental) == -1) {
      trip.plans.carPlans.push(props.navigation.state.params.carRental);
    }
  };
  if (props.navigation.state.params.source) {
    if (trip.plans.snapshots.indexOf(props.navigation.state.params.source) == -1) {
      trip.plans.snapshots.push(props.navigation.state.params.source);
    }
  };
  if (props.navigation.state.params.packingList) {
    if (trip.plans.packingPlans.indexOf(props.navigation.state.params.packingList) == -1) {
      trip.plans.packingPlans.push(props.navigation.state.params.packingList);
    }
  };
  if (props.navigation.state.params.homeCheckList) {
   if (trip.plans.homeCheckPlans.indexOf(props.navigation.state.params.homeCheckList) == -1) {
    trip.plans.homeCheckPlans.push(props.navigation.state.params.homeCheckList); 
   } 
  };

  console.log("in plans after", trip);
  let addNewPlan = () => {
    console.log("Adding New Plan");
    props.navigation.navigate('AddPlan', { trip })
    //props.navigation.navigate('Map')
  };
  let saveTrip = () => {
  }
  return(
    <SafeAreaView style={styles.container}>
      <Image source={logo}
        style={styles.logo}
      />
      {/* <SafeAreaView style={styles.import}>
        <TouchableOpacity>
          <Text> Import Plans from Gmail </Text>
        </TouchableOpacity>
      </SafeAreaView> */}
      <SafeAreaView style={styles.container}>
        { 
          trip.plans.flightPlans.map(flightPlan => 
            <SafeAreaView style={styles.plan} key={flightPlan.conf}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Flight', { flightPlan })}>
              <ImageBackground source={flight} style={styles.bgimg}>
                <Text style={styles.textBold}>
                {flightPlan.airline}
                </Text>
                <Text style={styles.text}>
                {flightPlan.conf}
                </Text>
                <Text style={styles.text}>
                {flightPlan.deptCity} - {flightPlan.arrivalCity}
                </Text>
                </ImageBackground>
              </TouchableOpacity>
            </SafeAreaView>
          )
        }
      {
      trip.plans.hotelPlans.map(plan => 
            <SafeAreaView style={styles.plan} key={plan.name}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Map', { plan })}>
              <ImageBackground source={hotel} style={styles.bgimg}>
                <Text style={styles.textBold}>
                {plan.name}
                </Text>
                <Text style={styles.text}>
                {plan.conf}
                </Text>
                <Text style={styles.text}>
                {plan.address}
                </Text>
                </ImageBackground>
              </TouchableOpacity>
            </SafeAreaView> 
      )}

      {
      trip.plans.carPlans.map(plan => 
            <SafeAreaView style={styles.plan} key={plan.conf}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Map', { plan })}>
              <ImageBackground source={car} style={styles.bgimg}>
                <Text style={styles.textBold}>
                {plan.name}
                </Text>
                <Text style={styles.text}>
                {plan.conf}
                </Text>
                <Text style={styles.text}>
                {plan.address}
                </Text>
                <Text style={styles.text}>
                {plan.pickUpDate}
                </Text>
                <Text style={styles.text}>
                {plan.dropOffDate}
                </Text>
                </ImageBackground>
              </TouchableOpacity>
            </SafeAreaView> 
      )} 
      {
      trip.plans.packingPlans.map(plan => 
            <SafeAreaView style={styles.plan} key={plan.name}>
              <TouchableOpacity onPress={() => props.navigation.navigate('AddPackingList', { plan })}>
              <ImageBackground source={packing} style={styles.bgimg}>

              <Text style={styles.textBold}>
                {plan.name}
              </Text>
              </ImageBackground>

              </TouchableOpacity>
            </SafeAreaView> 
      )} 
      {
        trip.plans.homeCheckPlans.map(plan =>
          <SafeAreaView style={styles.plan}>
            <TouchableOpacity onPress={() => props.navigation.navigate('AddHomeChecklist', { plan })}>
            <ImageBackground source={home} style={styles.bgimg}>
              <Text style={styles.textBold}>
                Home Check List
              </Text>
              </ImageBackground>
            </TouchableOpacity>
          </SafeAreaView>
        )
      }
      {
        trip.plans.snapshots.map(snapshot => 
          <SafeAreaView style={styles.plan} key={snapshot.uri}>
            <TouchableOpacity onPress={() => props.navigation.navigate('PreviewImage', { snapshot })}>
              <Image source={snapshot}
                style={styles.bgimg}
              />
            </TouchableOpacity>
          </SafeAreaView>
      )}
      </SafeAreaView>
      <SafeAreaView style={styles.plus}>
        <TouchableOpacity style={styles.to} onPress={addNewPlan}>
          <Ionicons name="ios-add-circle-outline" size={40} color="maroon" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.to} onPress={saveTrip}>
          <Ionicons name="ios-cloud-upload-outline" size={40} color="maroon" />
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
    plus: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'flex-end',
      justifyContent: 'space-around',
    },
    textBold: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    logo: {
      width: 150,
      height: 150,
      borderRadius: 100,
    },
    import: {
      flex: 0.2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    to: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // paddingBottom: 10,
    },
    plan: {
      flex: 0.3,
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
    snapshot: {
      width: 50,
      height: 50,
      paddingRight: 5
    },
    bgimg: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 500,
      height: 50,
      paddingRight: 5,
      borderColor: 'maroon', 
    }
  });

  let mapStateToProps = (state, props) => ({ state, props });

      
  let PlansScreen = connect(mapStateToProps)(PlansScreenWrapper);

export default PlansScreen;