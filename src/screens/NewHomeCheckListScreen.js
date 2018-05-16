import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, SafeAreaView, Button, Image, ImageBackground } from 'react-native';
import CheckBox from 'react-native-check-box';
import logo from '../assets/logo.png';

let NewHomeCheckListScreenWrapper = ({ props }) => {
  
  console.log('props inside newhome checklist screen', props);

  let homeCheckList = {};
  // let handleNameChange = (value) => {
  //   pList.name = value;
  // };
  let checkTurnOffGasItem = (value) => {
    console.log('check turn off gas item', value);
    homeCheckList.gasChecked = value;
  };
  let checkTurnOffRefrigeratorItem = (value) => {
    homeCheckList.refrigeratorChecked = value;
  };
  let checkSecurityItem = (value) => {
    homeCheckList.homeSecurityChecked = value;
  };
  let checkLockedDoorsItem = (value) => {
    homeCheckList.lockedDoorsChecked = value;
  };
  // let checkShoesItem = (value) => {
  //   homeCheckList.shoesChecked = value;
  // };
  // let checkMedsItem = (value) => {
  //   homeCheckList.medsChecked = value;
  // };
  // let checkCameraItem = (value) => {
  //   homeCheckList.cameraChecked = value;
  // };
  let handleAddItems = () => {
    // console.log(packingList);
    console.log(homeCheckList);
    props.navigation.navigate('Plans', { homeCheckList });
  };
    return(
      <SafeAreaView style={styles.container}>
      <Image source={logo}
        style={styles.logo}
      />
      <SafeAreaView style={styles.items}>
        {/* <SafeAreaView style={styles.cbview}>
        <TextInput 
          // style={styles.textfield} 
          placeholder='Packing Name'
          onChangeText={handleNameChange}
          autoCorrect={false}
          autoCapitalize={'words'} />
        </SafeAreaView> */}
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkTurnOffGasItem}
          isChecked={homeCheckList.gasChecked}
          leftText="Turn off the gas"
        />
        <Text style={styles.font}>  Turn off the gas </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkTurnOffRefrigeratorItem}
          isChecked={homeCheckList.refrigeratorChecked}
          leftText="Turn off the refrigerator"
        />
        <Text style={styles.font}>  Turn off the refrigerator </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkSecurityItem}
          isChecked={homeCheckList.homeSecurityChecked}
          leftText="Home Security"
        />
        <Text style={styles.font}>  Home Security </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkLockedDoorsItem}
          isChecked={homeCheckList.lockedDoorsChecked}
          leftText="Locked Doors"
        />
        <Text style={styles.font}>  Locked Doors </Text>
      </SafeAreaView>
      {/* <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkShoesItem}
          isChecked={homeCheckList.shoesChecked}
          leftText="Shoes"
        />
        <Text style={styles.font}>  Shoes </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkMedsItem}
          isChecked={packingList.medsChecked}
          leftText="Medicines"
        />
        <Text style={styles.font}>  Medicines </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkCameraItem}
          isChecked={packingList.cameraChecked}
          leftText="Camera"
        />
        <Text style={styles.font}>  Camera </Text>
      </SafeAreaView> */}
      <Button
        style={styles.button}
        title="Save"
        color="maroon"
        onPress={() => handleAddItems()}
      />
      </SafeAreaView>
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
    items: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    cbview: {
        flex: 0.1,
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    font: {
        fontSize: 15,
        color: "maroon",
    },
    checkbox: {
        width: 15,
        height: 15,
        paddingRight: 10,
    }
});

let mapStateToProps = (state, props) => ({ state, props });

let mapDispatchToProps = dispatch => ({});

let NewHomeCheckListScreen = connect(mapStateToProps, mapDispatchToProps)(NewHomeCheckListScreenWrapper);

export default NewHomeCheckListScreen;