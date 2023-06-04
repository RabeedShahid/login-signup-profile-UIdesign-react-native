import { View,Image, Text } from 'react-native'
import React from 'react'

export default function Settings() {
  return (
    <View style={{backgroundColor:"#FFF",height:"100%"}}>
    <Image source ={require('./image.jpg')}
        style={{width:"100%",height:"43%"}}
    />
    <Text
     style={{
         fontSize:30,
         fontWeight: 'bold',
       
         alignSelf:"center",
     }}
    >ABOUT US</Text>
    <Text
                style={{
                  fontSize:17,
                  fontWeight: 'bold',
                
                    color:"black",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:20,
                    opacity:0.4
                }}
                >
                    Hello and welcome to Shope, the place to find the best clothes for every taste and occasion. We thoroughly check the quality of our goods, working only with reliable suppliers so that you only receive the best quality product.

We at shope believe in high quality and exceptional customer service. But most importantly, we believe shopping is a right, not a luxury, so we strive to deliver the best products at the most affordable prices, and ship them to you regardless of where you are located.

                </Text>
    </View>
  )
}