import {  Text, Platform,  View } from 'react-native';
import { Home, Profile, Product, Settings, Login } from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SplashScreen from 'react-native-splash-screen';
import React, {Component} from 'react';


// Thanks for watching
const Tab =createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}
export default function App() {
  
  return (
     <NavigationContainer>
       <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="home" size={24} color={focused ? "red": "#00716F"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>HOME</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <MaterialCommunityIcons name="face-man-profile" size={24} color={focused ? "red": "#00716F"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>PROFILE</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Product" 
          component={Product} 
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View
                 style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#00716F",
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 30
                 }}
                ><Entypo name="shopping-cart" size={24}  color={focused ? "red": "white"} />
                </View>
              )
            }
           }}
          />
          <Tab.Screen
           name="Login" 
           component={Login}
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                <Entypo name="login" size={24}  color={focused ? "red": "#00716F"}/>
                  <Text style={{fonSize: 12, color: "#00716F"}}>LOGIN</Text>
            </View>
              )
            }
          }}
           />
          <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Entypo name="info" size={24}  color={focused ? "red": "#00716F"} />
                  <Text style={{fonSize: 12, color: "#00716F"}}>ABOUT</Text>
            </View>
              )
            }
          }}
          />
       </Tab.Navigator>
     </NavigationContainer>
)
}