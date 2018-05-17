import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import logo from '../assets/logo_2.png';

let NewPlanScreenWrapper = ({ props }) => {
  // trip = props.navigation.state.params.trip;
  plan = {};

  let handleSnapShot = () => {
    ImagePicker.showImagePicker({title: 'Select an Image'}, (response) => {
      console.log('Response = ', response);
      
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        console.log('src', source);
        props.navigation.navigate('Plans', { source })
      }
    });
  }

  return(
    <SafeAreaView style={styles.container}>
      <Image source={logo}
      style={styles.logo}
      />
      
      <TouchableOpacity style={styles.to} onPress={() => props.navigation.navigate('AddFlight')}>
        <Text style={styles.font}>Flight</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.to} onPress={() => props.navigation.navigate('AddHotel')}>
        <Text style={styles.font}>Hotel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.to} onPress={() => props.navigation.navigate('AddCar')}>
        <Text style={styles.font}>Car Rental</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.to} onPress={() => props.navigation.navigate('AddPackingList', { plan })}>
        <Text style={styles.font}>Packing Items</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.to}>
        <Text style={styles.font}>Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.to} onPress={handleSnapShot}>
        <Text style={styles.font}>Snapshot</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.to} onPress={() => props.navigation.navigate('AddHomeChecklist', { plan })}>
        <Text style={styles.font}>Home Checklist</Text>
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
  //  textfield: {
  //    height: 40, 
  //    width: 300,
  //    margin: 10,
  //    borderColor: 'maroon', 
  //    borderWidth: 1,
  //    borderRadius: 5,
  //    paddingLeft: 10,
  //  },
   button: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
   },
   logo: {
       width: 100,
       height: 100
   },
   font: {
    fontSize: 15,
    fontFamily: 'HelveticaNeue-Light',
    color: '#2EBCFF'
   },
   to: {
      height: 50
   }
});

let mapStateToProps = (state, props) => ({ state, props });
 
let NewPlanScreen = connect(mapStateToProps)(NewPlanScreenWrapper);

export default NewPlanScreen;