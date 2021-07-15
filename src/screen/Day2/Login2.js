import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {scale} from '../../utils/Scaling/Scaling';
import Feather from 'react-native-vector-icons/Feather';
export class Login2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isValidUser: true,
      isValidPassword: true,
      secureTextEntry: true,
      isFocus1: false,
      isFocus2: false,
      switchValue: false,
    };
  }
  updateSecureTextEntry = val => {
    this.setState({secureTextEntry: !this.state.secureTextEntry});
  };
  onBlur1 = () => {
    this.setState({isFocus1: false});
  };
  onFocus1 = () => {
    this.setState({isFocus1: true});
  };
  onBlur2 = () => {
    this.setState({isFocus2: false});
  };
  onFocus2 = () => {
    this.setState({isFocus2: true});
  };
  handleValidEmail = val => {
    console.log(val, 'vall');
    const mailFormat = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test(
      val,
    );
    if (mailFormat == true) {
      this.setState({
        isValidUser: true,
      });
    } else {
      this.setState({
        isValidUser: false,
      });
    }
  };
  handleValidPassword = val => {
    if (val.length >= 4) {
      this.setState({
        isValidPassword: true,
      });
    } else {
      this.setState({
        isValidPassword: false,
      });
    }
  };
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flex: 1}}>
          <Image
            source={require('../../Images/Bigbluering.png')}
            style={{
              height: 200,

              width: '100%',
              //  resizeMode: 'contain',
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              //justifyContent: 'center',
              marginTop: scale(40),
              paddingLeft: 20,
            }}>
            <Text style={{fontSize: 18, color: 'white'}}>Welcome Back</Text>
            <Text style={{fontSize: 30, color: '#fff', fontWeight: 'bold'}}>
              Log In!
            </Text>
          </View>
          <View style={styles.viewer}>
            <View style={styles.labelContainer}>
              <Text>EMAIL ADDRESS</Text>
            </View>
            <TextInput
              placeholder="email"
              onFocus={() => this.onFocus1()}
              onBlur={() => this.onBlur1()}
              onChangeText={text => this.setState({email: text})}
              onEndEditing={e => this.handleValidEmail(e.nativeEvent.text)}
              style={{
                ...styles.textInput,
                borderBottomColor: this.state.isFocus1 ? '#33DDFF' : 'black',
                borderBottomWidth: 2,
                paddingLeft: 15,
              }}
            />
          </View>
          {this.state.isValidUser ? null : (
            <Text style={{color: 'red', marginTop: -10, marginLeft: 20}}>
              Please enter correct email.
            </Text>
          )}
          <View
            style={{
              marginTop: scale(10),
              height: 65,
              position: 'relative',
              marginLeft: 20,
            }}>
            <View style={styles.labelContainer}>
              <Text>PASSWORD</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TextInput
                onBlur={() => this.onBlur2()}
                onFocus={() => this.onFocus2()}
                placeholder="Password"
                secureTextEntry={this.state.secureTextEntry ? true : false}
                style={{
                  ...styles.textInput,
                  paddingLeft: 15,
                  borderBottomColor: this.state.isFocus2 ? '#33DDFF' : 'black',
                  borderBottomWidth: 2,
                }}
                onEndEditing={e => this.handleValidPassword(e.nativeEvent.text)}
                onChangeText={text => this.setState({password: text})}
              />
              <TouchableOpacity onPress={() => this.updateSecureTextEntry()}>
                {this.state.secureTextEntry ? (
                  <Feather
                    style={{padding: 10}}
                    name="eye-off"
                    color="green"
                    size={20}
                  />
                ) : (
                  <Feather
                    style={{padding: 10}}
                    name="eye"
                    color="green"
                    size={20}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          {this.state.isValidPassword ? null : (
            <Text style={{color: 'red', marginLeft: 20}}>
              Password must be 4 characters long.
            </Text>
          )}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row', paddingLeft: 20}}>
              <View>
                <Switch
                  value={this.state.switchValue}
                  onValueChange={switchValue => this.setState({switchValue})}
                />
              </View>
              <Text>Remember me.</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Splash')}
              style={{paddingRight: 20}}>
              <Text>Forget Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              height: scale(50),
              width: '50%',
              backgroundColor: 'blue',
              borderRadius: 40,
              alignSelf: 'center',
              marginTop: scale(40),
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 8,

              // backgroundColor: '#0000',
            }}
            onPress={() => this.props.navigation.navigate('Register2')}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              Log in
            </Text>
          </TouchableOpacity>
          <View style={{height: 20, width: 20}}></View>
        </View>
      </ScrollView>
    );
  }
}

export default Login2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  labelContainer: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: -15,
    left: 25,
    padding: 5,
    zIndex: 50,
  },
  textInput: {
    width: '90%',
    borderWidth: 2,
    borderColor: 'black',
    // justifyContent: 'flex-end',
    height: scale(44),
    borderRadius: 15,
    //paddingHorizontal: 25,
  },
  viewer: {
    marginTop: scale(90),
    height: 65,
    position: 'relative',
    marginLeft: 20,
  },
});
