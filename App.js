import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './App/components/DrawerContent';

import HomeScreen from './App/components/Home';
import MainTabScreen from './App/components/MainTabScreen';
import ProfileScreen from './App/components/Profile';
import AboutScreen from './App/components/About';
import LoginScreen from './App/components/Login';
import RegistScreen from './App/components/Register';
import MainScreen from './App/components/Main';
import Story1 from './App/components/Story1';
import Story2 from './App/components/Story2';
import Story3 from './App/components/Story3';
import Story4 from './App/components/Story4';
import Nicholas from './App/components/Nicholas';
import TravelWife from './App/components/TravelWife';


const NavigationStack = createStackNavigator();
const Drawer = createDrawerNavigator();

 const App = () =>{
  return(
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} 
      drawerStyle={{
          backgroundColor: '#5582c1',
          borderRightColor:'#5582c1',
          borderRightWidth: 1
        }}>
        <Drawer.Screen name="Main" component={MainScreen}/>
        <Drawer.Screen name="Login" component={LoginScreen}/>
        <Drawer.Screen name="Register" component={RegistScreen}/>
        <Drawer.Screen name="Home" component={MainTabScreen}/>
        <Drawer.Screen name="About" component={AboutScreen}/>
        <Drawer.Screen name="Profile" component={ProfileScreen}/>
        <Drawer.Screen name="Story1" component={Story1}/>
        <Drawer.Screen name="Story2" component={Story2}/>
        <Drawer.Screen name="Story3" component={Story3}/>
        <Drawer.Screen name="Story4" component={Story4}/>
        <Drawer.Screen name="Nicholas" component={Nicholas}/>
        <Drawer.Screen name="TravelWife" component={TravelWife}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default App;
