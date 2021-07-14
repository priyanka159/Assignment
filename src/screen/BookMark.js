import React, { Component } from 'react';
import { View, Text,StyleSheet ,Button} from 'react-native';

const BookMark=()=>{
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

export default BookMark;
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
