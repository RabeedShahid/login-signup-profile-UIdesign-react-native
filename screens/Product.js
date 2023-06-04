import { View,Image, Text } from 'react-native'
import React from 'react'

export default function Product() {
  return (
    <View style={{backgroundColor:"#FFF",height:"100%"}}>
    <Image source ={require('./ops.jpg')}
                    style={{width:"100%",height:"43%", marginTop:100}}
                />
    <Text
     style={{
         fontSize:30,
         fontWeight: 'bold',
         alignSelf:"center",
     }}
    >NO PRODUCTS AVAILABLE</Text>

    
    </View>

    
  )
}