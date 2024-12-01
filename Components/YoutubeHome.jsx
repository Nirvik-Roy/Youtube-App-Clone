import React from "react";
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as Icon from "react-native-feather";
export const YoutubeHome = () =>{
    return (
        <>

      
        <StatusBar backgroundColor={'black'} barStyle={'light-content'}></StatusBar>
        <View style={{flex:1,backgroundColor:'black'}}>

            <SafeAreaView >
           <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingLeft:15,paddingRight:15}}>
             <View style={{width:110,height:50}}>
                <Image style={{width:"100%",height:"100%",objectFit:'contain'}} source={ require('../Images/youtube-logo-png-image-ezgif.com-webp-to-jpg-converter__1_-removebg-preview.png')}/>
             </View>
             <View style={{flexDirection:'row',alignItems:'center',columnGap:25}} >
             <TouchableOpacity>
             <Icon.Cast stroke={'white'} strokeWidth={1.7} width={25} height={25}/>
             </TouchableOpacity>
               
                <TouchableOpacity>
                <View style={{position:'relative'}}>
                <Icon.Bell stroke={'white'} strokeWidth={1.7} width={25} height={25}/>
                <View style={{width:20,height:15,backgroundColor:'red',borderRadius:7,position:'absolute',right:'-7',display:'flex',justifyContent:'center'}}>
                    <Text style={{fontSize:10,fontWeight:'800',color:'#ffff',textAlign:'center'}}>9+</Text>
                </View>
                </View>
                </TouchableOpacity>



                <TouchableOpacity>
                <Icon.Search stroke={'white'} strokeWidth={1.7} width={25} height={25}/>
                </TouchableOpacity>
               
              
             </View>
           </View>
            </SafeAreaView>
        </View>
        </>
    )
}