import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YoutubeSearch from '../Components/YoutubeSearch/YoutubeSearch';
import { YoutubeHome } from '../Components/YoutubeHome';
const Navigator = () =>{
 const Stack = createNativeStackNavigator()
    return (
        <>
           <NavigationContainer>
             <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Search' options={{headerShown:false}} component={YoutubeSearch}/>
                <Stack.Screen name='Home' options={{headerShown:false}} component={YoutubeHome}/>
             </Stack.Navigator>
           </NavigationContainer>
        </>
    )
  
}

export default Navigator
