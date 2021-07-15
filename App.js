import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screen/Login';
import RegisterScreen from './src/screen/Register';
import UserList from './src/screen/UserList';
import Login2 from './src/screen/Day2/Login2';
import Splash from './src/screen/Day2/Spash';
import Register2 from './src/screen/Day2/Register2';
const Stack = createStackNavigator();
export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login2" component={Login2} />
          <Stack.Screen name="Register2" component={Register2} />

          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="UserList" component={UserList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
