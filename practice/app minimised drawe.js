/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import {NavigationContainer} from '@react-navigation/native';
 import {createDrawerNavigator} from '@react-navigation/drawer';
 import React from 'react';
 import Icon from 'react-native-vector-icons/dist/FontAwesome';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   View,
   Button,
   Image,
   TouchableOpacity
 } from 'react-native';
 
 ///Isueeeeee--
 //from drawer it is going to stack but from stack it is not going to again stackk------------so ww will create again stack navigator
 ///////////////////////////////////////////////////////////////////
 import {createStackNavigator} from '@react-navigation/stack';
 import MainTabScreen from './src/screen/MainTabScreen';
 
 const Drawer = createDrawerNavigator();
 
 
 
 
 const App = () => {
   return (
     <NavigationContainer>
       <Drawer.Navigator initialRouteName="Home">
         <Drawer.Screen name="Home" component={MainTabScreen} />
         {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
       </Drawer.Navigator>
   
     </NavigationContainer>
   );
 };
 const styles = StyleSheet.create({});
 
 export default App;
 