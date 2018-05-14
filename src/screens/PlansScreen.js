import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';


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
  if (props.navigation.state.params.source) {
    if (trip.plans.snapshots.indexOf(props.navigation.state.params.source) == -1) {
      trip.plans.snapshots.push(props.navigation.state.params.source);
    }
  };

  console.log("in plans after", trip);
  let addNewPlan = () => {
    console.log("Adding New Plan");
    props.navigation.navigate('AddPlan', { trip })
    //props.navigation.navigate('Map')
  };
  return(
    <SafeAreaView style={styles.container}>
      <Image source={logo}
        style={styles.logo}
      />
      <SafeAreaView style={styles.import}>
        <TouchableOpacity>
          <Text> Import Plans from Gmail </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
      {
      trip.plans.flightPlans.map(flightPlan => 
            <SafeAreaView style={styles.plan} key={flightPlan.conf}>
              <TouchableOpacity>
                <Text style={styles.textBold}>
                {flightPlan.airline}
                </Text>
                <Text style={styles.text}>
                {flightPlan.conf}
                </Text>
                <Text style={styles.text}>
                {flightPlan.deptCity} to {flightPlan.arrivalCity}
                </Text>
              </TouchableOpacity>
            </SafeAreaView> 
      )}
      {
      trip.plans.hotelPlans.map(hotelPlan => 
            <SafeAreaView style={styles.plan} key={hotelPlan.name}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Map', { hotelPlan })}>
                <Text style={styles.textBold}>
                {hotelPlan.name}
                </Text>
                <Text style={styles.text}>
                {hotelPlan.conf}
                </Text>
                <Text style={styles.text}>
                {hotelPlan.address}
                </Text>
              </TouchableOpacity>
            </SafeAreaView> 
      )}   
      {
        trip.plans.snapshots.map(snapshot => 
          <SafeAreaView style={styles.plan} key={snapshot.uri}>
            <TouchableOpacity onPress={() => props.navigation.navigate('PreviewImage', { snapshot })}>
              <Image source={snapshot}
                style={styles.snapshot}
              />
            </TouchableOpacity>
          </SafeAreaView>
      )}
      </SafeAreaView>
      <SafeAreaView style={styles.plus}>
        <TouchableOpacity style={styles.to} onPress={addNewPlan}>
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
    plus: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    logo: {
      width: 150,
      height: 150
    },
    import: {
      flex: 0.2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    to: {
      paddingBottom: 10,
    },
    plan: {
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
    snapshot: {
      width: 50,
      height: 50
    }
  });

  let mapStateToProps = (state, props) => ({ state, props });

      
  let PlansScreen = connect(mapStateToProps)(PlansScreenWrapper);

export default PlansScreen;