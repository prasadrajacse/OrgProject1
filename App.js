import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './screens/login';
import Home from './screens/home';
import ForgotPassword from './screens/forgotpassword';
import Register from './screens/register';

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Home: {screen: Home},
  ForgotPassword:{screen: ForgotPassword},
  Register :{screen: Register}
});


const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
} 

console.disableYellowBox = true;

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    alignSelf:'stretch',
  },
});
 