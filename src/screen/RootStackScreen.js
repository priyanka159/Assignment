import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './SplashScreen'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'


const rootStack=createStackNavigator()

const RootStackScreen=({navigation})=>(
    <rootStack.Navigator headerMode="none">
        <rootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <rootStack.Screen  name="SignInScreen" component={SignInScreen}/>
        <rootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </rootStack.Navigator>
)
export default RootStackScreen
////import in App.js