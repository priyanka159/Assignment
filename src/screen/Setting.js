import React, { Component } from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';

const Setting=()=>{
    return(
        <View style={styles.container}>
            <Text>SEttinggg Screen</Text>
            <Button 
            title="Click here"
            onPress={()=>alert("Button clicked")}
            />
        </View>
    )
}

export default Setting;
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
