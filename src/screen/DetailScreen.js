import React, { Component } from 'react';
import { View, Text,Button} from 'react-native';
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
  export default Details