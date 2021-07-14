import React, { Component } from 'react';
import { View, Text,StyleSheet,Button,Dimensions ,Image,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'
//MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const SplashScreen=({navigation})=>{
    return(
        <View style={styles.container}>
        <View style={styles.header} >
            <Animatable.Image 
                animation="bounceIn"
               // duration="1500"
            source={require('../Images/player1.png')} style={styles.logo}
            resizeMode="stretch"
        
            />
        </View>
        <Animatable.View
        animation="fadeInUpBig"
         style={styles.footer}>
        <Text style={styles.title}>Stay connected with Us</Text> 
            <Text style={styles.text}>Sign in with Account</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <View style={{...styles.signIn,backgroundColor:'#08d4c4'}}>
                    <Text style={styles.textSign}>Get Started</Text>
                    <Icon
                    name="chevron-right"
                    color="#fff"
                    size={20}
                    />
                </View>
            </TouchableOpacity>
            </View>

        </Animatable.View>
       </View>
    )
}
const {height}=Dimensions.get("screen")
const height_logo=height*0.28
export default SplashScreen;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387'
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,paddingHorizontal:30
    },
    logo:{
        width:height_logo,
        height:height_logo
    },
    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold'
    },
    text:{
        color:'grey',
        marginTop:5
    },
    button:{
        alignItems:'flex-end',
        marginTop:30

    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row'
    },
    textSign:{
        color:'white',
        fontWeight:"bold",
        marginRight:7
    }
})
// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// class SplashScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//         <Text style={{color:'red',fontSize:25}}> Say Hello to your new {"\n"}                   app </Text>
//    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignInScreen')}}
//    style={{height:40,width:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'red',borderRadius:20,marginTop:40}}>
//      <Text style={{color:'white',alignSelf:'center',fontSize:16}}>Log in</Text>  
//    </TouchableOpacity>
//    <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('SignUpScreen')}}
//    style={{height:40,width:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'white',borderRadius:20,borderWidth:1,borderColor:'red',marginTop:20}}>
//      <Text style={{color:'red',alignSelf:'center',fontSize:16}}>Sign Up</Text>  
//    </TouchableOpacity>
   
   
//     </View>
//     );
//   }
// }

// export default SplashScreen;
