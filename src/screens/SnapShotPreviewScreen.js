import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, SafeAreaView, Button, Image } from 'react-native';
import logo from '../assets/logo.png';

let SnapShotPreviewScreenWrapper = ({ props }) => {
  let snapshot = props.navigation.state.params.snapshot;
    return ( 
      <SafeAreaView style={styles.container} key={snapshot.uri}>
        <Image source={snapshot}
          style={styles.snapshot}
        />
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
    width: 250,
    height: 250
  }
});

let mapStateToProps = (state, props) => ({ state, props });

let SnapShotPreviewScreen = connect(mapStateToProps)(SnapShotPreviewScreenWrapper);

export default SnapShotPreviewScreen;