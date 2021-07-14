import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  //   await AsyncStorage.setItem(
  //     '@MySuperStore:key',
  //     'I like to save it.'
  //   );

  signUp = async (email, password) => {
    //await AsyncStorage.setItem('email', this.state.email);
    //await AsyncStorage.setItem('password', this.state.password);

    let formData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(formData, 'hiii');

    axios
      .post(`https://reqres.in/api/register`, formData)
      .then(res => {
        console.log(res.data, res.status);
        if (this.state.email != '' && this.state.password != '') {
          if (res.status === '200') {
            console.log(res.data, 'reddddsssd');
            //{"id": 4, "token": "QpwL5tke4Pnpja7X4"} 200
            let token = response.data.token;
            //   AsyncStorage.setItem('token', token);
            this.props.navigation.navigate('Login');
          } else if (res.status === '400') {
            alert(res.data.error);
          }
        } else {
          console.warn('missing password');
        }
      })

      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Text
          style={{color: 'red', fontSize: 24, marginLeft: 10, marginTop: 20}}>
          {' '}
          Create New Account
        </Text>
        <View style={{alignItems: 'center'}}>
          <TextInput
            placeholder="Email Address"
            style={{
              height: 40,
              width: '80%',
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 30,
              marginTop: 20,
              paddingLeft: 15,
            }}
            onChangeText={text => this.setState({email: text})}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={{
              height: 40,
              width: '80%',
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 30,
              marginTop: 20,
              paddingLeft: 15,
            }}
            onChangeText={text => this.setState({password: text})}
          />
          <TouchableOpacity
            onPress={() => {
              this.signUp();
            }}
            style={{
              height: 40,
              width: '70%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'red',
              borderRadius: 20,
              marginTop: 40,
            }}>
            <Text style={{color: 'white', alignSelf: 'center', fontSize: 16}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default RegisterScreen;
const styles = StyleSheet.create({});
