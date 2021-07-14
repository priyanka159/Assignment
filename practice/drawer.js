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
 const Stack = createStackNavigator();
 //////
 const HomeStack = createStackNavigator();
 const DetailsStack = createStackNavigator();
 const Drawer = createDrawerNavigator();
 
 const HomeStackScreen = ({navigation}) => (
   <HomeStack.Navigator
     screenOptions={{
       headerStyle: {
         backgroundColor: '#009387',
       },
       headerTintColor: '#fff',
       headerTitleStyle: {
         fontWeight: 'bold',
       },
     }}>
     <HomeStack.Screen
       name="Home"
       component={HomeScreen}
       options={{
         title: 'Overview',
         headerLeft:()=>(<TouchableOpacity onPress={()=>navigation.openDrawer()}>
         <Image source={require('./src/Images/player1.png')}/>
         </TouchableOpacity>
         )
       }}
     />
   </HomeStack.Navigator>
 )
 const DetailsStackScreen = ({navigation}) => (
   <DetailsStack.Navigator
     screenOptions={{
       headerStyle: {
         backgroundColor: '#009387',
       }, 
       headerTintColor: '#fff',
       headerTitleStyle: {
         fontWeight: 'bold',
       },
     }}>
     <DetailsStack.Screen name="Details" component={Details}
     options={{
      headerLeft:()=>(<TouchableOpacity onPress={()=>navigation.openDrawer()}>
      <Image source={require('./src/Images/player1.png')}/>
      </TouchableOpacity>
      )
     }}
       />
   </DetailsStack.Navigator>
 )
 const HomeScreen = ({navigation}) => {
   return (
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>Home Screen</Text>
       <Button
         title="go to next screen"
         onPress={() => navigation.navigate('Details')}
       />
     </View>
   );
 };
 const Details = ({navigation}) => {
   return (
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>Next Screen</Text>
       <Button
         title="go to next screen ...again"
         onPress={() => navigation.push('Details')}
       />
       <Button
         title="go to home screen"
         onPress={() => navigation.navigate('Home')}
       />
       <Button title="go to first screen" onPress={() => navigation.goBack()} />
     </View>
   );
 };
 const App = () => {
   return (
     <NavigationContainer>
       <Drawer.Navigator initialRouteName="Home">
         <Drawer.Screen name="Home" component={HomeStackScreen} />
         <Drawer.Screen name="Details" component={DetailsStackScreen} />
       </Drawer.Navigator>
       {/* <Stack.Navigator
         screenOptions={{
           headerStyle: {
             backgroundColor: '#009387',
           },
           headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
           },
         }}>
         <Stack.Screen
           name="Home"
           component={HomeScreen}
           options={{
             title: 'Overview',
           }}
         />
         <Stack.Screen name="Details" component={Details} />
       </Stack.Navigator> */}
     </NavigationContainer>
   );
 };
 const styles = StyleSheet.create({});
 
 export default App;
 