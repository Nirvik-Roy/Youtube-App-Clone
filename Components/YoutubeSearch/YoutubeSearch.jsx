import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import * as Icon from "react-native-feather";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';
const YoutubeSearch = () => {
    const Navigation = useNavigation()
    return (
     <>
        <View style={{flex:1,backgroundColor:'black',paddingHorizontal:10,paddingTop:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <TouchableWithoutFeedback onPress={(()=>Navigation.navigate('Home'))}>
        <Icon.ArrowLeft stroke={'white'}  strokeWidth={1.2} width={27} height={27}/>
        </TouchableWithoutFeedback>
        <View style={{marginLeft:5}}>
            <TextInput placeholder='Search Youtube' placeholderTextColor={'white'}   style={{width:wp(80),paddingVertical:5,backgroundColor:'#1A1A1A',borderRadius:20,color:'white',paddingHorizontal:15,fontWeight:600,fontSize:17}}></TextInput>
        </View>
        <View  style={{width:32,height:32,backgroundColor:'#1A1A1A',borderRadius:50,justifyContent:'center',alignItems:'center',marginLeft:5}}>
            <Icon.Mic stroke={'white'} width={20} height={20}/>
        </View>
        </View>
    
          
        </View>
     </>
    )
  
}

export default YoutubeSearch
