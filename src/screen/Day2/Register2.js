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
} from 'react-native';
import {scale} from '../../utils/Scaling/Scaling';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
export class Register2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      secureTextEntry: true,
      isFocus1: false,
      isFocus2: false,
      isFocus3: false,
    };
  }
  handleSignUp = () => {
    const formData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    console.log('formData', formData);
  };
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
            <Text style={{fontSize: 18, color: 'white'}}>Hello</Text>
            <Text style={{fontSize: 30, color: '#fff', fontWeight: 'bold'}}>
              Sign Up!
            </Text>
          </View>

          <View style={styles.viewer}>
            <View style={styles.labelContainer}>
              <Text>USER NAME</Text>
            </View>
            <TextInput
              placeholder="username"
              onBlur={() => this.onBlur1()}
              onFocus={() => this.onFocus1()}
              onChangeText={text => this.setState({username: text})}
              style={{
                ...styles.textInput,
                borderBottomColor: this.state.isFocus1 ? '#33DDFF' : 'black',
                borderBottomWidth: 2,
              }}
            />
          </View>
          <View
            style={{
              marginTop: scale(10),
              height: 65,
              position: 'relative',
              marginLeft: 20,
            }}>
            <View style={styles.labelContainer}>
              <Text>EMAIL ADDRESS</Text>
            </View>
            <TextInput
              placeholder="email"
              onChangeText={text => this.setState({email: text})}
              style={{
                ...styles.textInput,
                borderBottomColor: this.state.isFocus2 ? '#33DDFF' : 'black',
                borderBottomWidth: 2,
              }}
              onBlur={() => this.onBlur2()}
              onFocus={() => this.onFocus2()}
            />
          </View>
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
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <TextInput
                placeholder="Password"
                secureTextEntry={this.state.secureTextEntry ? true : false}
                style={styles.textInput}
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // marginTop: 10,
            }}>
            <View style={{flexDirection: 'row', paddingLeft: 20}}>
              <View>
                <Text>hii</Text>
              </View>
              <Text>I accept the policy and forms.</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              height: scale(50),
              width: '50%',
              backgroundColor: 'blue',
              borderRadius: 40,
              alignSelf: 'center',
              marginTop: scale(20),
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 8,

              // backgroundColor: '#0000',
            }}
            onPress={() => this.handleSignUp()}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              Sign up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              //  justifyContent: 'space-between',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <View>
              <TouchableOpacity
                style={{
                  height: scale(30),
                  width: scale(30),
                  borderRadius: 30 / 2,
                  backgroundColor: '#1DA1F2',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <Icon name="twitter" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                height: scale(30),
                width: scale(30),
                marginRight: 10,
                borderRadius: 30 / 2,
                backgroundColor: '#DB4437',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="google-plus" size={15} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: scale(30),
                width: scale(30),
                borderRadius: 30 / 2,
                backgroundColor: '#0077b5',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="linkedin" size={15} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={{height: 20, width: 20}}></View>
        </View>
      </ScrollView>
    );
  }
}

export default Register2;
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
    paddingLeft: 15,

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
