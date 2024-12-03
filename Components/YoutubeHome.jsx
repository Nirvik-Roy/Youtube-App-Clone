import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Icon from "react-native-feather";
export const YoutubeHome = () => {

  const data = [
    {
      id: 1,
      title: 'All'
    },
    {
      id: 2,
      title: 'Trending'
    },
    {
      id: 3,
      title: 'Gaming'
    },
    {
      id: 4,
      title: 'Music'
    },
    {
      id: 5,
      title: 'Sports'
    },
    {
      id: 6,
      title: 'Entertainment'
    },
    {
      id: 7,
      title: 'Live'
    },
    {
      id: 8,
      title: 'Sports'
    }
  ]
  const [index, setIndex] = useState(0)
  const sendIndexfunc = (i) => {
    setIndex(i)
  }
  return (
    <>


      <StatusBar backgroundColor={'black'} barStyle={'light-content'}></StatusBar>
      <View style={{ flex: 1, backgroundColor: 'black' }}>

        <SafeAreaView >
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15 }}>
            <View style={{ width: 110, height: 50 }}>
              <Image style={{ width: "100%", height: "100%", objectFit: 'contain' }} source={require('../Images/youtube-logo-png-image-ezgif.com-webp-to-jpg-converter__1_-removebg-preview.png')} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 25 }} >
              <TouchableOpacity>
                <Icon.Cast stroke={'white'} strokeWidth={1.7} width={25} height={25} />
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={{ position: 'relative' }}>
                  <Icon.Bell stroke={'white'} strokeWidth={1.7} width={25} height={25} />
                  <View style={{ width: 20, height: 15, backgroundColor: 'red', borderRadius: 7, position: 'absolute', right: '-7', display: 'flex', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 10, fontWeight: '800', color: '#ffff', textAlign: 'center' }}>9+</Text>
                  </View>
                </View>
              </TouchableOpacity>



              <TouchableOpacity>
                <Icon.Search stroke={'white'} strokeWidth={1.7} width={25} height={25} />
              </TouchableOpacity>



            </View>
          </View>

          <ScrollView horizontal={true}>
            <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', columnGap: 12, paddingHorizontal: 12 }}>
              <TouchableWithoutFeedback>
                <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#262625', borderRadius: 5 }}>
                  <Icon.Compass stroke={'white'} strokeWidth={1.4} width={20} height={20} />
                </View>
              </TouchableWithoutFeedback>
              {data.map((e, i) => {
                return (
                  <>
                    <TouchableWithoutFeedback key={i} onPress={(() => sendIndexfunc(i))}>
                      <View style={index == i ? styles.textActive : styles.textNotActive}>
                        <Text style={{ color: `${index == i ? 'black' : 'white'}`, fontSize: 14, fontWeight: 600 }}>{e.title}</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </>
                )
              })}
              <Text style={{ color: 'white', fontSize: 13, fontWeight: 600 }}>Send feedback</Text>
            </View>
          </ScrollView>

          <View>
            <ScrollView>
              <View style={{width:'100%',marginTop:8}}>
                <View style={{width:'100%',height:220}}>
                  <Image style={{width:'100%',height:'100%',objectFit:'cover'}} source={require('../Images/1600w-GAaTBbqaaGg.webp')}/>
                </View>
                <View style={{flexDirection:'row',marginTop:6,alignItems:'center',justifyContent:'space-between',paddingHorizontal:7}}>
                      <TouchableWithoutFeedback>
                        <View style={{width:45,height:45,borderRadius:50}}>
                        <Image style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:50}} source={require('../Images/1600w-GAaTBbqaaGg.webp')}/>
                        </View>
                      </TouchableWithoutFeedback>

                      <View style={{width:'75%'}}>
                        <Text style={{color:'white',fontSize:15,fontWeight:700}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp....</Text>
                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',columnGap:3,marginTop:2}}>
                          <Text style={{color:'white',fontSize:12,fontWeight:700}}>Sony SAB</Text>
                          <Text style={{color:'white',fontSize:12,fontWeight:700}}>.</Text>
                          <Text style={{color:'white',fontSize:12,fontWeight:700}}>9.4M views</Text>
                          <Text style={{color:'white',fontSize:12,fontWeight:700}}>.</Text>
                          <Text style={{color:'white',fontSize:12,fontWeight:700}}>1 year ago</Text>
                        </View>
                      </View>

                      <TouchableOpacity>
                        <Icon.MoreVertical stroke={'white'}/>
                      </TouchableOpacity>


                </View>
              </View>

              

              
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  textActive: {
    paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#fff', borderRadius: 7,
    color: '#000'
  },
  textNotActive: {
    paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#262625', borderRadius: 7,
    color: '#fff'
  }
})