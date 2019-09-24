import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,TextInput,Button, Alert } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
      }
      static navigationOptions = {
        title: 'Home',
      };
      onClickListener = (viewId) => {
        //Alert.alert("Alert", "Button pressed "+viewId);
      }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
           Home
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2E45',
    alignSelf:'stretch',
  },
  heading:{
   fontSize: 24,
   color: '#FFFFFF'
  }
});
