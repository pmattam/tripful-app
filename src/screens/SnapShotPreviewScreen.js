import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, SafeAreaView, Button, Image, View } from 'react-native';
import logo from '../assets/logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

let SnapShotPreviewScreenWrapper = ({ props }) => {
  let snapshot = props.navigation.state.params.snapshot;
    return ( 
      <SafeAreaView style={styles.container} key={snapshot.uri}>
        <Image source={snapshot}
          style={styles.snapshot}
        />
        <View>
          <View>
            <Ionicons name="ios-trash-outline" size={30} color="maroon"/>
          </View>
          <View>
            <Ionicons name="ios-close-circle-outline" size={30} color="blue"/>
          </View>
        </View> 
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
  snapshot: {
    marginTop: 20,
    width: 250,
    height: 250
  }
});

let mapStateToProps = (state, props) => ({ state, props });

let SnapShotPreviewScreen = connect(mapStateToProps)(SnapShotPreviewScreenWrapper);

export default SnapShotPreviewScreen;