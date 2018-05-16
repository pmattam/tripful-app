import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, SafeAreaView, Button, Image, ImageBackground } from 'react-native';
import CheckBox from 'react-native-check-box';
import logo from '../assets/logo.png';
// import packing from '../assets/packing.jpg';

let NewPackingListScreenWrapper = ({ props }) => {
  let packingList = {};
  let handleNameChange = (value) => {
    packingList.name = value;
  };
  let checkShirtsItem = (value) => {
    console.log('check shirts item', value);
    packingList.shirtsChecked = value;
  };
  let checkPantsItem = (value) => {
    packingList.pantsChecked = value;
  };
  let checkTltItem = (value) => {
    packingList.tltChecked = value;
  };
  let checkCosmeticsItem = (value) => {
    packingList.cosmeticsChecked = value;
  };
  let checkShoesItem = (value) => {
    packingList.shoesChecked = value;
  };
  let checkMedsItem = (value) => {
    packingList.medsChecked = value;
  };
  let checkCameraItem = (value) => {
    packingList.cameraChecked = value;
  };
  let handleAddItems = () => {
    console.log(packingList);
    props.navigation.navigate('Plans', {packingList})
  };
  return(
    // <ImageBackground 
    //   style={{width: '100%', height: '100%'}}
    //   source={packing}>
    
    <SafeAreaView style={styles.container}>
      <Image source={logo}
        style={styles.logo}
      />
      <SafeAreaView style={styles.items}>
        <SafeAreaView style={styles.cbview}>
        <TextInput 
          // style={styles.textfield} 
          placeholder='Packing Name'
          onChangeText={handleNameChange}
          autoCorrect={false}
          autoCapitalize={'words'} />
        </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkShirtsItem}
          isChecked={packingList.shirtsChecked}
          leftText="Shirts"
        />
        <Text style={styles.font}>  Shirts </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkPantsItem}
          isChecked={packingList.pantsChecked}
          leftText="Pants"
        />
        <Text style={styles.font}>  Pants </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkTltItem}
          isChecked={packingList.tltChecked}
          leftText="Toiletries"
        />
        <Text style={styles.font}>  Toiletries </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkCosmeticsItem}
          isChecked={packingList.cosmeticsChecked}
          leftText="Cosmetics"
        />
        <Text style={styles.font}>  Cosmetics </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkShoesItem}
          isChecked={packingList.shoesChecked}
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
      </SafeAreaView>
      <Button
        style={styles.button}
        title="Save"
        color="maroon"
        onPress={() => handleAddItems()}
      />
      </SafeAreaView>
    </SafeAreaView>

      // </ImageBackground>

  )
}

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

let NewPackingListScreen = connect(mapStateToProps, mapDispatchToProps)(NewPackingListScreenWrapper);

export default NewPackingListScreen;