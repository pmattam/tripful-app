import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';
import RootStack from './RootStack';
import reducer from './src/reducers/index';

const store = createStore(reducer, devToolsEnhancer());

let reactNativeReduxStore = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);
  
AppRegistry.registerComponent('tripfulapp', () => reactNativeReduxStore);