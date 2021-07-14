import React, { Component } from 'react';
import { View, Text, Alert,Platform ,StyleSheet,Dimensions,Image} from 'react-native';
import MapView,{PROVIDER_GOOGLE,Marker,Callout,Polygon,Circle} from 'react-native-maps';
import Carousel from 'react-native-snap-carousel'; 
import Geolocation from '@react-native-community/geolocation';
import {request,PERMISSIONS} from 'react-native-permissions' 
class Explore extends Component {
  constructor(props) {
    super(props);
    
      
  this.state = {
    marker:[],
  coordinates:[
    {name:'Burger',latitude:37.8025259,longitude:-122.4351431,image:require('./../../android/app/burger.jpg')},
    {name:'Pizza',latitude:37.7896386,longitude:-122.421646,image:require('./../../android/app/pizza.jpg')},
    {name:'Soup',latitude:37.7665248,longitude:-122.4161628,image:require('./../../android/app/soup.jpg')},
    {name:'Sushi',latitude:37.7734153,longitude:-122.4577787,image:require('./../../android/app/sushi.jpg')},
    {name:'Curry',latitude:37.7948605,longitude:-122.4596065,image:require('./../../android/app/curry.jpg')},
  
  ]
    
  }
}
componentDidMount(){
  this.requestLocationPermission()
}
requestLocationPermission=async()=>{
if(Platform.OS=='ios'){
 var response=await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
 console.log('iPhone'+response)
 if(response=='granted'){
   this.locateCurrentPosition()
 }
}
else{
var response=await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
console.log('androidd'+response)
if(response=="granted"){
  this.locateCurrentPosition()
}
}
}
locateCurrentPosition=()=>{
  Geolocation.getCurrentPosition(
    position=>{
      console.log(JSON.stringify(position),'hoo')
      let region={
        latitude:position.coords.latitude,
        longitude:position.coords.longitude,
        latitudeDelta:0.09,
        longitudeDelta:0.035
      }
      this.setState({initialPosition:region})
    },
    error=>Alert.alert(error.message),
    {enableHighAccuracy:true,timeout:10000,maximumAge:1000}
  )
}
showMessage=()=>{
  Alert.alert(
    'Welcome to Chittaranjan',
    'the food is amazing',
    [
      {
        text:'Cancel',
        style:'cancel'
      },
      {
        text:'OK'
      }
    ]
  )
}
onCarouselItemChange=(index)=>{
  console.log('caroselINnndex',index,this.state.coordinates[index])
let location=this.state.coordinates[index]
this._map.animateToRegion({
  latitude:location.latitude,
  longitude:location.longitude,
  latitudeDelta:0.09,
  longitudeDelta:0.035
})
this.state.marker[index].showCallout()
}
_renderItem=({item,index})=>{
  console.log('carosell',item)
  return (

    <View style={{height:200,width:300,backgroundColor:'rgba(0,0,0,0.6)',borderRadius:24}} >
   <Text style={{color:'white',fontSize:22,alignSelf:'center',marginTop:20}}>{item.name}</Text>
   <Image source={item.image} style={{height:120,width:300,bottom:0,position:'absolute',
   borderBottomLeftRadius:24,borderBottomRightRadius:24}}/>
   </View>
);
}

//when we will click on map pizza....show caroselll
onMarkerPressed=(location,index)=>{
  console.log('markeronpresss',location)
  this._map.animateToRegion({
    latitude:location.latitude,
    longitude:location.longitude,
    latitudeDelta:0.09,
    longitudeDelta:0.035
  })
///it will navigate to snappp
this._carousel.snapToItem(index)

}
  render() {
    return (
      <View style={styles.container}>
      <MapView
      ref={map=>this._map=map}
      showsUserLocation={true }
      style={{height:'100%'}}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude:37.78825,
        longitude:-122.4324,
        latitudeDelta:0.09,
        longitudeDelta:0.035
      }}
  //  initialRegion={this.state.initialPosition  }
    >
<Polygon
fillColor={'rgba(100,100,200,0.3) '}
coordinates={this.state.coordinates}
strokeWidth={3}
/>
{/* <Circle
center={{latitude:37.8025259,longitude:-122.4351431}}
radius={1000}
fillColor={'rgba(100,100,200,0.5)'}
/> */}

      <Marker
    
      coordinate={{latitude: 37.78825,longitude:-122.4324}}
      title={'San Francisco'}>
        <Callout onPress={this.showMessage}>
          <Text>An interesting cityyy</Text>
        </Callout>
      </Marker>
      {
        this.state.coordinates.map((marker,index)=>(
          <Marker 
          ref={ref=>this.state.marker[index]=ref}
          //////map moves to that curry
          onPress={()=>this.onMarkerPressed(marker,index)}
          key={marker.name}

          coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
          title={marker.name}
          >

          </Marker>
        ))
      }
    </MapView>
    <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.coordinates}
              renderItem={this._renderItem}
              containerCustomStyle={styles.carousel}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={300}
              onSnapToItem={(index)=>this.onCarouselItemChange(index)}
              removeClippedSubviews={false}
            />
    </View>
    );
  }
}

export default Explore;

const styles=StyleSheet.create({
  container:{
...StyleSheet.absoluteFillObject
  },
  map:{
    ...StyleSheet.absoluteFillObject
  },
  carousel:{
    position:'absolute',
    bottom:0,
    marginBottom:28
  }
})