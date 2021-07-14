import React, { Component ,useState} from 'react';
import { View, Text,Modal,Button, TouchableOpacity,Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false,
      image:''
    };
  }
takePhotoFromCamera=()=>{
console.warn('Take Photo')
ImagePicker.openCamera({
  width: 300,
  height: 400,
  cropping: true,
}).then(image => {
 this.setState({image:image.path})
});
}
choosePhotoFromGallery=()=>{
console.warn('Choose Photo')
ImagePicker.openPicker({
  width: 300,
  height: 400,
  cropping: true
}).then(image => {
  this.setState({image:image.path})
});
}
  render() {
    return (
      <View style={{flex:1}}>
        <Button title="show modal" onPress={()=>this.setState({show:true})}/>
           <Modal transparent={true}
        visible={this.state.show}
        >
          <View style={{backgroundColor:'#000000aa',flex:1}}>
            <View style={{backgroundColor:'white',margin:50,borderRadius:10,padding:20,flex:1}}>
        <Text style={{fontSize:30}}>Modal</Text>
        <Button title="show modal" onPress={()=>this.setState({show:false})}/>
        </View>
        </View>
        </Modal>
        <TouchableOpacity>
        <Text style={{marginTop:50}}> Profile </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={this.takePhotoFromCamera}style={{height:40,width:240,backgroundColor:'red',marginTop:40}}>
         <Text > Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.choosePhotoFromGallery} style={{height:40,width:240,backgroundColor:'red',marginTop:40}}>
         <Text > Choose from library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40,width:240,backgroundColor:'red',marginTop:40}}>
         <Text > Cancel</Text>
        </TouchableOpacity>
        <View style={{height:100,width:220}}>
          <Image source={this.state.image}/>
        </View>
      </View>
    );
  }
}

export default Profile;
