import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import logo from './src/assets/logo_1.png';

let Logo = () =>
  <View>
    {<Image source={logo}
    style={{
      width: 250,
      height: 40
    }}
    />}
  </View>

export default Logo;



