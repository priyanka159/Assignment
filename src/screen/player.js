import React, { useRef,useEffect,useState } from 'react';
import { View, Text,SafeAreaView,FlatList ,Image, StyleSheet,Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import songs from './data'
const {width}=Dimensions.get('window')

export default function Player(){
  const scrollX=useRef(new Animated.Value(0)).current
  const [index,setIndex]=useState(0)
  // useEffect(()=>{
  //   scrollX.addListener(({value})=>{
  //     console.log(value)
  //   })
  // },[])
 const  renderItem=({item})=>{
    return(
    <View style={styles.imageContainer}>
     <Image style={styles.image} source={item.image}/>
     <Text style={styles.title} >{item.title}</Text>
     </View>
    )
  }
  return(
    <View>
    <SafeAreaView style={{height:320}}>
    <FlatList data={songs} renderItem={renderItem} keyExtractor={(item)=>item.id} horizontal
    showsHorizontalScrollIndicator={false}
    pagingEnabled
    scrollEventThrottle={16}
    onScroll={(e)=>Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:true})}
    />

</SafeAreaView> 
    <Text style={styles.title}>{songs[0].title}</Text>
</View>
  )
}
const styles=StyleSheet.create({
  container:{},
  image:{
    width:320,
    height:320
  },
  imageContainer:{
    width:width,
    alignItems:'center'
  },
  title:{
    fontSize:26,
    textAlign:'center',
    marginTop:100
  }
})