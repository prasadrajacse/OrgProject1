import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,TextInput,Button, Alert } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email   : '',
          password: '',
        }
      }
      static navigationOptions = {
        title: 'Login',
      };
      onClickListener = (viewId) => {
        //Alert.alert("Alert", "Button pressed "+viewId);
      }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
           Org Project
        </Text>
        <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})} />

        <Button
          title="Login"
          onPress={() => navigate('Home')}
        />

        <Text style={styles.titleText} onPress={() => navigate('ForgotPassword')}>
        {'\n'}Forgot Password
        </Text>
        <Text style={styles.titleText} onPress={() => navigate('Register')}>
        {'\n'}Register
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
  },
  titleText:{
    fontSize: 18,
    color: '#FFFFFF',
  },
  inputs:{
    height:40,
    alignSelf:'stretch',
    borderBottomColor: '#FFFFFF',
    marginTop : 10,
    marginRight: 40,
    marginBottom: 10,
    marginLeft: 40,
    borderBottomWidth :1
}
});
