/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useState, useEffect} from 'react';
import {DrawerContent} from './src/screen/DrawerContent';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
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
  TouchableOpacity,
  Settings,
  ActivityIndicator,
} from 'react-native';

///Isueeeeee--
//from drawer it is going to stack but from stack it is not going to again stackk------------so ww will create again stack navigator
///////////////////////////////////////////////////////////////////
import {createStackNavigator} from '@react-navigation/stack';
import MainTabScreen from './src/screen/MainTabScreen';
import Support from './src/screen/Support';
import BookMark from './src/screen/BookMark';

import Setting from './src/screen/Setting';
import RootStackScreen from './src/screen/RootStackScreen';
const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsloading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
        <Text style={{fontSize: 20}}>I Love youuuu</Text>
      </View>
    );
  }
  return (
    <PaperProvider>
      <NavigationContainer>
        {/* <RootStackScreen/> */}
        <Drawer.Navigator
          drawerContent={props => <DrawerContent {...props} />}
          initialRouteName="Home">
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="Support" component={Support} />
          <Drawer.Screen name="Setting" component={Setting} />
          <Drawer.Screen name="BookMark" component={BookMark} />
        </Drawer.Navigator>
        {/* name="Home" noooooo */}
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}

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
    </PaperProvider>
  );
};
const styles = StyleSheet.create({});

export default App;
