import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = () => {
    const formData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(formData, 'see');
    axios
      .post(`/https://reqres.in/api/login`, formData)
      .then(res => {
        console.log(res.data, 'see');
        if (this.state.email != '' && this.state.password != '') {
          if (res.data.status === '200') {
            const token = response.data.token;
            AsyncStorage.setItem('token', token);

            this.props.navigation.navigate('UserList');
          }
        } else {
          console.log('missing password');
        }
      })
      .catch(err => {
        console.log(err, 'ERR');
      });
  };
  render() {
    console.log(this.props);
    return (
      <View style={{flex: 1}}>
        <Text
          style={{color: 'red', fontSize: 24, marginLeft: 10, marginTop: 20}}>
          {' '}
          Login Screen
        </Text>
        <View style={{alignItems: 'center'}}>
          <TextInput
            placeholder="Email "
            style={{
              height: 40,
              width: '80%',
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 30,
              marginTop: 40,
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
              paddingLeft: 20,
            }}
            onChangeText={text => this.setState({password: text})}
          />
          <TouchableOpacity
            onPress={() => {
              this.handleLogin();
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
              Log in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={{color: 'red', marginTop: 10}}>Register Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
