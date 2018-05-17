import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import logo from './src/assets/logo_1.png';
// import planslogo from './src/assets/plans_logo.png'; 
// import addPlanLogo from './src/assets/addplan_logo.png';

export let Logo = () =>
  <View>
    {<Image source={logo}
    style={{
      width: 250,
      height: 40
    }}
    />}
  </View>

// export let PlansLogo = () =>
//   <View>
//     {<Image source={planslogo}
//     style={{
//       width: 250,
//       height: 40
//     }}
//     />}
//   </View>

// export let AddPlanLogo = () =>
//   <View>
//     {<Image source={addPlanLogo}
//     style={{
//       width: 250,
//       height: 40
//     }}
//     />}
//   </View>

