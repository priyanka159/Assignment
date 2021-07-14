import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import Details from './DetailScreen';
import Profile from './ProfileScreen';
import Explore from './ExploreScreen';
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
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
//////
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const MainTabScreen=()=>(
<Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
     // barStyle={{ backgroundColor: '#009387' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: '',
          tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor:'#d02860',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
            tabBarLabel: 'Profile',
            tabBarColor:'#694fad',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
         <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
            tabBarLabel: 'Explore',
            tabBarColor:'orange',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>


)
export default MainTabScreen
const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf:'center',
          marginRight:50
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'HOME',
          headerLeft:()=>(<TouchableOpacity onPress={()=>navigation.openDrawer()}>
          {/* <Image source={require('./src/Images/player1.png')}/> */}
          <Icon name="align-justify" style={{fontSize:30,marginLeft:10}}/>
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
          backgroundColor: '#d02860',
        }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <DetailsStack.Screen name="Details" component={Details}
      options={{
       headerLeft:()=>(<TouchableOpacity onPress={()=>navigation.openDrawer()}>
       <Image source={require('../Images/player1.png')}/>
       </TouchableOpacity>
       )
      }}
        />
    </DetailsStack.Navigator>
  )