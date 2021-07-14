import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {Avatar,Title,Caption,Paragraph,Drawer,TouchableRipple,Switch} from 'react-native-paper'
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
export function DrawerContent(props){
    const [isDarkTheme,setIsDarkTheme]=React.useState(false)
    const toggleTheme=()=>{
        setIsDarkTheme(!isDarkTheme)
    }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.DrawerContent}>
                    <View style={styles.userInfoSection}>
<View style={{flexDirection:'row',marginTop:15}}>
    <Avatar.Image
    source={require('../Images/player1.png')}
    size={50}
    />
    <View style={{marginLeft:15}}>
        <Title style={styles.title}>Priyanka Kumari</Title>
        <Caption style={styles.caption}>Traders</Caption>
    </View>
</View>
{/* <View style={styles.row}>
    <View style={styles.Section}>
        <Paragraph style={[styles.Paragraph,styles.caption]}>80</Paragraph>
        <Caption style={styles.caption}>Following</Caption>
    </View>
    <View style={{...styles.Section,marginLeft:15}}>
        <Paragraph>180</Paragraph>
        <Caption>Followers</Caption>
    </View>
</View> */}

                    </View>
       <Drawer.Section style={styles.drawerSection}
       >
           <DrawerItem
           icon={({color,size})=>(
            <Icon name="home-outline" color={color} size={size}/>
        )}
        label="Home"
        onPress={()=>{props.navigation.navigate('Home')}}

           >

           </DrawerItem>
           <DrawerItem
           icon={({color,size})=>(
            <Icon name="account-outline" color={color} size={size}/>
        )}
        label="Brand"
        onPress={()=>{props.navigation.navigate('Profile')}}

           >

           </DrawerItem>
           <DrawerItem
           icon={({color,size})=>(
            <Icon name="account-check-outline" color={color} size={size}/>
        )}
        label="My-cart"
        onPress={()=>{props.navigation.navigate('Support')}}

           >

           </DrawerItem>
           <DrawerItem
           icon={({color,size})=>(
            <Icon name="bookmark-outline" color={color} size={size}/>
        )}
        label="wishList"
        onPress={()=>{props.navigation.navigate('BookMark')}}

           >

           </DrawerItem>
           <DrawerItem
           icon={({color,size})=>(
            <Icon name="account-outline" color={color} size={size}/>
        )}
        label="Profile"
        onPress={()=>{props.navigation.navigate('Setting')}}

           >
                   <DrawerItem
           icon={({color,size})=>(
            <Icon name="account-outline" color={color} size={size}/>
        )}
        label="My order"
        onPress={()=>{props.navigation.navigate('Setting')}}

           >
                   <DrawerItem
           icon={({color,size})=>(
            <Icon name="account-outline" color={color} size={size}/>
        )}
        label="Profile"
        onPress={()=>{props.navigation.navigate('Setting')}}

           >

           </DrawerItem>
           </DrawerItem>

           </DrawerItem>
           </Drawer.Section>
{/* <Drawer.Section title="Preferences">
    <TouchableRipple onPress={()=>{toggleTheme()}}>
<View style={styles.preference}>

    <Text>Dark Theme</Text>
    <View pointerEvents="none">
    <Switch value={isDarkTheme}/>
    </View>
</View>
    </TouchableRipple>
</Drawer.Section> */}

                </View>
            </DrawerContentScrollView>
            {/* <Drawer.Section style={styles.bottomDrawerSection}>

<DrawerItem
icon={({color,size})=>(
    <Icon name="exit-to-app" color={color} size={size}/>
)}
label="Sign out"
onPress={()=>{}}

>

</DrawerItem>
            </Drawer.Section> */}
        </View>
    )
}
const styles=StyleSheet.create({
    DrawerContent:{
        flex:1,
      
    },
    userInfoSection:{
        paddingLeft:20,
        backgroundColor:'red',
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold',
        color:'white'
    },
    caption:{
        fontSize:12,
        lineHeight:14,
        color:'#fff'
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'

    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    Paragraph:{
        fontWeight:'bold',
        marginRight:3
    },
    drawerSection:{
        marginTop:15
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'black',
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    }
})