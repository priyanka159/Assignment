import React, { Component } from 'react';
import { View, Text,StyleSheet,Button,Dimensions ,Image,TouchableOpacity,TextInput,StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable'
//MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
const SignUpScreen=({navigation})=>{
    const [data,setData]=React.useState({
        email:'',
        password:'',
        check_textInputChange:false,
        secureTextEntry:true,
        check_secureTextConfirm:true
    })
    const textInputChange=(val)=>{
        if(val.length!==0){
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            })
        }
        else{
            setData({
                ...data,
                check_textInputChange:false,
                email:val
            })
        }
    }

    const updateSecureTextEntry=(val)=>{
     
        setData({
            ...data,
          secureTextEntry:!data.secureTextEntry
        })
}
const check_secureTextConfirm=()=>{
    setData({
        ...data,
        check_secureTextConfirm:!data.check_textInputChange
    })
}
    const handlePasswordChange=(val)=>{
     
            setData({
                ...data,
                password:val,
                check_textInputChange:true
            })
    }
    const handleConfirmPasswordChange=()=>{
        setData({
            ...data,
            passwordConfirm:val,
            check_secureTextConfirm:true
        })
    }
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle='light-content'/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
         
        </View>
        <Animatable.View 
        animation="fadeInUpBig"
        style={styles.footer}>
<Text style={styles.text_footer}> Email</Text>
<View style={styles.action}>
    <FontAwesome name="user-o"
    color="#05375a"
    size={25}
    />
    <TextInput
    placeholder="Your Email"
    style={styles.textInput}
    onChangeText={(val)=>textInputChange(val)}
    />
    {data.check_textInputChange?
    <Animatable.View
    animation="bounceIn"
    >
    <Feather
    name="check-circle"
    color="green"
    size={20}
    /></Animatable.View>
    :
    null}
</View>
<Text style={[styles.text_footer,{marginTop:35}]}> Password </Text>
<View style={styles.action}>
    <FontAwesome name="lock"
    color="#05375a"
    size={30}
    />
    <TextInput
    placeholder="Your Password"
    secureTextEntry={data.secureTextEntry?true:false}
    style={styles.textInput}
    onChangeText={(val)=>handlePasswordChange(val)}
    />
    <TouchableOpacity onPress={()=>updateSecureTextEntry()}>
   {data.secureTextEntry?
    <Feather
    name="eye-off"
    color="green"
    size={20}
    />:
    <Feather
    name="eye"
    color="green"
    size={20}
    />}
    </TouchableOpacity>
</View>
<Text style={[styles.text_footer,{marginTop:35}]}> Confirm Password </Text>
<View style={styles.action}>
    <FontAwesome name="lock"
    color="#05375a"
    size={30}
    />
    <TextInput
    placeholder="Confirm your Password"
    secureTextEntry={data.check_secureTextConfirm?true:false}
    style={styles.textInput}
    onChangeText={(val)=>handleConfirmPasswordChange(val)}
    />
    <TouchableOpacity onPress={()=>check_secureTextConfirm()}>
   {data.check_secureTextConfirm?
    <Feather
    name="eye-off"
    color="green"
    size={20}
    />:
    <Feather
    name="eye"
    color="green"
    size={20}
    />}
    </TouchableOpacity>
</View>
<View style={styles.button}>
    <TouchableOpacity onPress={()=>navigation.goBack()}
    style={{...styles.signIn}}>
        <Text style={{color:'#fff'}}>Sign In</Text>
    </TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}
style={[styles.signIn,{
    borderColor:'#009387',
    backgroundColor:'#fff',
    borderWidth:1,marginTop:15
}]}>
    <Text style={{color:"#009387"}}>Sign Up</Text>

</TouchableOpacity>
</View>
        </Animatable.View>
        </View>
    )
}

export default SignUpScreen;
const styles=StyleSheet.create({
    container:{
        flex:1,
      backgroundColor:'#009387'
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,paddingBottom:50
    },
    footer:{
        flex:3,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:30,
        paddingHorizontal:10
    },
    text_header:{
        color:"#fff",
        fontWeight:'bold',
        fontSize:30
    },
    text_footer:{
        color:"#05375a",
        fontSize:18
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:"#f2f2f2",
        paddingBottom:5
    },
    signIn:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#08d4c4',
        borderRadius:15
    }
,
    textInput:{
        flex:1,
        paddingLeft:10,
        color:"#05375a"
    },
    button:{
        alignItems:'center',
        marginTop:50
    }

})



// import React, { Component } from 'react';
// import { View, Text,StyleSheet,Button,Dimensions ,Image,TouchableOpacity,TextInput,StatusBar} from 'react-native';
// import * as Animatable from 'react-native-animatable'
// //MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import Feather from 'react-native-vector-icons/Feather'
// import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
// import { NavigationContainer } from '@react-navigation/native';
// const SignInScreen=({navigation})=>{
//     const [data,setData]=React.useState({
//         email:'',
//         password:'',
//         check_textInputChange:false,
//         isValidUser:true,
//         isValidPassword:true,
//         secureTextEntry:true
//     })
//     const textInputChange=(val)=>{
//         if(val.length!==0){
//             setData({
//                 ...data,
//                 email:val,
//                 check_textInputChange:true
//             })
//         }
//         else{
//             setData({
//                 ...data,
//                 check_textInputChange:false,
//                 email:val
//             })
//         }
//     }
//     const updateSecureTextEntry=(val)=>{
     
//         setData({
//             ...data,
//           secureTextEntry:!data.secureTextEntry
//         })
// }
//     const handlePasswordChange=(val)=>{
     
//             setData({
//                 ...data,
//                 password:val,
//                 check_textInputChange:true
//             })
//     }
//    const handleValidEmail=(val)=>{
// if(val.length>=4){
//     setData({
//         ...data,
//         isValidUser:true
//     })
// }
// else{
//     setData({
//         ...data,
//         isValidUser:false
//     })
// }
//     }
//     const handleValidPassword=(val)=>{
//         if(val.length>=4){
//             setData({
//                 ...data,
//                 isValidPassword:true
//             })
//         }
//         else{
//             setData({
//                 ...data,
//                 isValidPassword:false
//             })
//         }
//             }
//     return(
//         <View style={styles.container}>
//             <StatusBar backgroundColor='#009387' barStyle='light-content'/>
//         <View style={styles.header}>
//             <Text style={styles.text_header}>Welcome!</Text>
         
//         </View>
//         <Animatable.View 
//         animation="fadeInUpBig"
//         style={styles.footer}>
// <Text style={styles.text_footer}> Email</Text>
// <View style={styles.action}>
//     <FontAwesome name="user-o"
//     color="#05375a"
//     size={25}
//     />
//     <TextInput
//     placeholder="Your Email"
//     style={styles.textInput}
//     onChangeText={(val)=>textInputChange(val)}
    
//     onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}
//     />
//     {data.check_textInputChange?
//     <Animatable.View
//     animation="bounceIn"
//     >
//     <Feather
//     name="check-circle"
//     color="green"
//     size={20}
//     /></Animatable.View>
//     :
//     null}
// </View>
// {data.isValidUser?null:
// <Text style={{color:'red'}}>Username must be 4 characters long.</Text>}
// <Text style={[styles.text_footer,{marginTop:35}]}> Password </Text>
// <View style={styles.action}>
//     <FontAwesome name="lock"
//     color="#05375a"
//     size={30}
//     />
//     <TextInput
//     placeholder="Your Password"
//     secureTextEntry={data.secureTextEntry?true:false}
//     style={styles.textInput}
//     onChangeText={(val)=>handlePasswordChange(val)}
//     onEndEditing={(e)=>handleValidPassword(e.nativeEvent.text)}
//     />
//     <TouchableOpacity onPress={()=>updateSecureTextEntry()}>
//    {data.secureTextEntry?
//     <Feather
//     name="eye-off"
//     color="green"
//     size={20}
//     />:
//     <Feather
//     name="eye"
//     color="green"
//     size={20}
//     />}
//     </TouchableOpacity>
// </View> 
// {data.isValidPassword?null:
// <Text style={{color:'red'}}>Password must be 4 characters long.</Text>}
// <View style={styles.button}>
//     <View style={{...styles.signIn}}>
//         <Text style={{color:'#fff'}}>Sign In</Text>
//     </View>
// <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}
// style={[styles.signIn,{
//     borderColor:'#009387',
//     backgroundColor:'#fff',
//     borderWidth:1,marginTop:15
// }]}>
//     <Text style={{color:"#009387"}}>Sign Up</Text>

// </TouchableOpacity>
// </View>
//         </Animatable.View>
//         </View>
//     )
// }

// export default SignInScreen;
// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//       backgroundColor:'#009387'
//     },
//     header:{
//         flex:1,
//         justifyContent:'flex-end',
//         paddingHorizontal:20,paddingBottom:50
//     },
//     footer:{
//         flex:3,
//         backgroundColor:'#fff',
//         borderTopLeftRadius:30,
//         borderTopRightRadius:30,
//         paddingVertical:30,
//         paddingHorizontal:10
//     },
//     text_header:{
//         color:"#fff",
//         fontWeight:'bold',
//         fontSize:30
//     },
//     text_footer:{
//         color:"#05375a",
//         fontSize:18
//     },
//     action:{
//         flexDirection:'row',
//         marginTop:10,
//         borderBottomWidth:1,
//         borderBottomColor:"#f2f2f2",
//         paddingBottom:5
//     },
//     signIn:{
//         width:'100%',
//         height:50,
//         justifyContent:'center',
//         alignItems:'center',
//         borderRadius:10,
//         backgroundColor:'#08d4c4',
//         borderRadius:15
//     }
// ,
//     textInput:{
//         flex:1,
//         paddingLeft:10,
//         color:"#05375a"
//     },
//     button:{
//         alignItems:'center',
//         marginTop:50
//     }

// })





// import React, { Component } from 'react';
// import { View, Text,TouchableOpacity,TextInput } from 'react-native';

// class SignUpScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         fullName:'',
//         phone:'',
//         email:'',
//         password:''
//     };
//   }

//   signUp=()=>{
//       let formData={
//           fullName:this.state.fullName,
//           phone:this.state.phone,
//           email:this.state.email,
//           password:this.state.password
//       }
//       console.log(formData,'hiii')
//   }
//   render() {
//     return (
//       <View style={{flex:1}}>
//         <Text style={{color:'red',fontSize:24,marginLeft:10,marginTop:20}}> Create New Account</Text>
//        <View style={{alignItems:'center'}}>
        
//         <TextInput
//         placeholder='Full Name'
//   style={{ height: 40,width:'80%', borderColor: 'gray', borderWidth: 1,borderRadius:30,marginTop:40,paddingLeft:15 }}
//   onChangeText={(text) => this.setState({fullName: text})}
// />
// <TextInput
//         placeholder='Phone number'
//   style={{ height: 40,width:'80%', borderColor: 'gray', borderWidth: 1,borderRadius:30,marginTop:20,paddingLeft:15 }}
//   onChangeText={(text) => this.setState({phone: text})}
// />
// <TextInput
//         placeholder='Email Address'
//   style={{ height: 40,width:'80%', borderColor: 'gray', borderWidth: 1,borderRadius:30,marginTop:20,paddingLeft:15 }}
//   onChangeText={(text) => this.setState({email: text})}
// />

// <TextInput

//   placeholder='Password'
// secureTextEntry={true}
//   style={{ height: 40,width:'80%', borderColor: 'gray', borderWidth: 1,borderRadius:30,marginTop:20,paddingLeft:20}}
//   onChangeText={(text) => this.setState({password: text})}
// />
//         <TouchableOpacity onPress={()=>{this.signUp()}}
//    style={{height:40,width:'70%',alignItems:'center',justifyContent:'center',backgroundColor:'red',borderRadius:20,marginTop:40}}>
//      <Text style={{color:'white',alignSelf:'center',fontSize:16}}>Sign Up</Text>  
//    </TouchableOpacity>
 
//    </View>
     
//       </View>
//     );
//   }
// }

// export default SignUpScreen;

