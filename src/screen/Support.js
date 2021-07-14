import React, { Component } from 'react';
import { View, Text,StyleSheet,Button} from 'react-native';

const Support=()=>{
    return(
        <View style={styles.container}>
            <Text>Support Screen</Text>
            <Button 
            title="Click here"
            onPress={()=>alert("Button clicked")}
            />
        </View>
    )
}

export default Support;
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
