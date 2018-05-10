import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from './Routes';
import reducer from './src/reducers/index';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let reactNativeReduxStore = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
  
AppRegistry.registerComponent('tripfulapp', () => reactNativeReduxStore);