import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, SafeAreaView, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import CheckBox from 'react-native-check-box';
import logo from '../assets/logo_2.png';
// import packing from '../assets/packing.jpg';

let NewPackingListScreenWrapper = ({ props }) => {
  let packingList = props.navigation.state.params.plan;
  // if (props.navigation.state.params.plan) {
  //   packingList = props.navigation.state.params.plan;
  // };
  let handleNameChange = (value) => {
    packingList.name = value;
  };
  let checkShirtsItem = () => {
    packingList.shirtsChecked = !packingList.shirtsChecked;
  };
  let checkPantsItem = () => {
    packingList.pantsChecked = !packingList.pantsChecked;
  };
  let checkTltItem = () => {
    packingList.tltChecked = !packingList.tltChecked;
  };
  let checkCosmeticsItem = () => {
    packingList.cosmeticsChecked = !packingList.cosmeticsChecked;
  };
  let checkShoesItem = () => {
    packingList.shoesChecked = !packingList.shoesChecked;
  };
  let checkMedsItem = () => {
    packingList.medsChecked = !packingList.medsChecked;
  };
  let checkCameraItem = () => {
    packingList.cameraChecked = !packingList.cameraChecked;
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
          value={packingList.name}
          onChangeText={handleNameChange}
          autoCorrect={false}
          autoCapitalize={'words'} />
        </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkShirtsItem}
          checkBoxColor='#2EBCFF'
          isChecked={packingList.shirtsChecked}
          leftText="Shirts"
        />
        <Text style={styles.font}>  Shirts </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkPantsItem}
          checkBoxColor='#2EBCFF'
          isChecked={packingList.pantsChecked}
          leftText="Pants"
        />
        <Text style={styles.font}>  Pants </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkTltItem}
          checkBoxColor='#2EBCFF'
          isChecked={packingList.tltChecked}
          leftText="Toiletries"
        />
        <Text style={styles.font}>  Toiletries </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkCosmeticsItem}
          checkBoxColor='#2EBCFF'
          isChecked={packingList.cosmeticsChecked}
          leftText="Cosmetics"
        />
        <Text style={styles.font}>  Cosmetics </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkShoesItem}
          checkBoxColor='#2EBCFF'
          isChecked={packingList.shoesChecked}
          leftText="Shoes"
        />
        <Text style={styles.font}>  Shoes </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkMedsItem}
          checkBoxColor='#2EBCFF'
          isChecked={packingList.medsChecked}
          leftText="Medicines"
        />
        <Text style={styles.font}>  Medicines </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cbview}>
        <CheckBox
          style={styles.checkbox}
          onClick={checkCameraItem}
          checkBoxColor='#2EBCFF'
          isChecked={packingList.cameraChecked}
          leftText="Camera"
        />
        <Text style={styles.font}>  Camera </Text>
      </SafeAreaView>
      <Button
        style={styles.button}
        title="Save"
        color='#06005D'
        fontSize={15}
        fontFamily={'HelveticaNeue-Light'}
        buttonStyle={{
          backgroundColor: '#fff',
          borderColor: '#2EBCFF',
          height: 48,
          width: 100,
          borderRadius: 5,
          borderWidth: 1,
        }}
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
        width: 100,
        height: 100
    },
    font: {
      fontSize: 15,
      fontFamily: 'HelveticaNeue-Light',
      color: '#06005D'
    },
    checkbox: {
      width: 15,
      height: 15,
      paddingRight: 10
    }
});

let mapStateToProps = (state, props) => ({ state, props });

let mapDispatchToProps = dispatch => ({});

let NewPackingListScreen = connect(mapStateToProps, mapDispatchToProps)(NewPackingListScreenWrapper);

export default NewPackingListScreen;