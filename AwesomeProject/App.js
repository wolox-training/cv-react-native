import React, { Component } from 'react';
import { Provider } from 'react-redux'
import NavigationTabs from './src/app/components/NavigationTabs.js';
import './src/app/config/ReactotronConfig';
import Store from './src/redux/Store';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={Store}>
        <NavigationTabs/>
      </Provider>
    );
  }
}
