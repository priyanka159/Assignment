import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {scale} from '../../utils/Scaling/Scaling';
export class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: '100%', height: scale(200), marginTop: -20}}
          source={require('../../Images/dolphin.jpg')}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: scale(35),
            fontWeight: 'bold',
            color: '#3374FF',
            marginTop: -10,
          }}>
          DOLPHY
        </Text>
        <Text
          style={{fontSize: scale(25), fontWeight: '600', color: '#808B96'}}>
          A P P S T A
        </Text>
        <Text
          style={{
            fontSize: scale(40),
            letterSpacing: 1,
            fontWeight: 'bold',
            marginTop: scale(40),
          }}>
          Sign Up
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'gray',
            textAlign: 'center',
            marginTop: 5,
          }}>
          It's easier to sign up now!
        </Text>
        <View style={{marginTop: scale(16), marginBottom: scale(15)}}>
          {/* Icon.Button Component */}
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#3374FF',
            height: scale(50),
            width: '90%',
            borderRadius: scale(30),
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 8, //for android
            // add shadows for iOS only
            shadowColor: 'blue',
            shadowOffset: {width: 5, height: 5},
            shadowOpacity: 0.26,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: scale(30),
              fontWeight: 'bold',
              // marginLeft: scale(20),
            }}>
            f
          </Text>
          <Text
            style={{
              color: '#fff',
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 20,
            }}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: 'black',
            height: scale(50),
            width: '80%',
            borderRadius: 30,
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,

              marginLeft: scale(20),
            }}>
            I'll use email or phone
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

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
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text>Already have account </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login2')}>
            <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
