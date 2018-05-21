import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, TextInput, Text, SafeAreaView, Button, Image, View } from 'react-native';
import logo from '../assets/logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';


let SnapShotPreviewScreenWrapper = ({ props }) => {
  let snapshot = props.navigation.state.params.snapshot;

  // let deleteSnapshot = () => {
  //   snapshot = null;
  //   props.navigation.navigate('Plans');
  // };

  let closeSnapshot = () => {
    props.navigation.navigate('Plans');
  };

    return ( 
      <SafeAreaView style={styles.container} key={snapshot.uri}>
        <Image source={snapshot}
          style={styles.snapshot}
        />
        {/* <View styles={styles.icons}> */}
            {/* <TouchableOpacity style={styles.to} onPress={deleteSnapshot}>
              <Ionicons name="ios-trash-outline" size={30} color="maroon"/>
            </TouchableOpacity> */}
          <TouchableOpacity onPress={closeSnapshot}>
            <Ionicons name="ios-close-circle-outline" size={30} color="blue"/>
          </TouchableOpacity>
        {/* </View>  */}
      </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icons: {
    flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  to: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  snapshot: {
    marginTop: 20,
    width: 250,
    height: 250
  }
});

let mapStateToProps = (state, props) => ({ state, props });

let SnapShotPreviewScreen = connect(mapStateToProps)(SnapShotPreviewScreenWrapper);

export default SnapShotPreviewScreen;