import React from 'react'
import { Text, View } from 'react-native'
import { YoutubeHome } from './Components/YoutubeHome'
import YoutubeSearch from './Components/YoutubeSearch/YoutubeSearch'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './Navigator/Navigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const App = () => {
     const Stack = createNativeStackNavigator()
    return (
       <>
       <Navigator/>
       </>
  
      
    )
  
}

export default App

