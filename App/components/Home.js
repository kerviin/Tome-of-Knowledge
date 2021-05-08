import React from 'react';
import { StyleSheet, View, ImageBackground, Image, StatusBar, TouchableOpacity, Text } from 'react-native';
import image from '../../assets/register.png'
import story1 from '../../assets/story1.png'
import story2 from '../../assets/story2.png'
import story3 from '../../assets/story3.png'
import story4 from '../../assets/story4.png'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const navigation = navigation;
export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.Wallpaper}>
            <StatusBar hidden={false} />
            <Icon.Button name="ios-menu-outline" size={33} left={20}
            backgroundColor="rgba(0, 0, 0, 0)"
            onPress={() => {navigation.openDrawer()}}>  
            </Icon.Button>
            <Text style={styles.txt1}>Welcome To</Text>
            <Text style={styles.txt}>Tome of Knowledge</Text>
            <Text style={styles.txt2}>Available Stories:</Text>
            <TouchableOpacity activeOpacity={0.95} onPress={ () => navigation.navigate('Story1', {name: 'Story1'})} style={styles.touch1}>
                <Image source={story1} style={styles.story1}></Image>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.95} onPress={ () => navigation.navigate('Story2', {name: 'Story2'})} style={styles.touch2}>
                <Image source={story2} style={styles.story2} onPress={ () => navigation.navigate('Story2', {name: 'Story2'})}></Image>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.95} onPress={ () => navigation.navigate('Story3', {name: 'Story3'})} style={styles.touch3}>
                <Image source={story3} style={styles.story3} onPress={ () => navigation.navigate('Story3', {name: 'Story3'})}></Image>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.95} onPress={ () => navigation.navigate('Story4', {name: 'Story4'})} style={styles.touch4}>
                <Image source={story4} style={styles.story4} onPress={ () => navigation.navigate('Story4', {name: 'Story4'})}></Image>
            </TouchableOpacity>
            
            
            
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
      },
      Wallpaper: {
          flex: 1,
          resizeMode: "cover",
      },
      button: {
          flexDirection: 'row', 
          height: 80, 
          width: 150,
          backgroundColor: '#58b9ca',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 220,
          marginLeft: 150,
          borderRadius: 100,
          padding: 10,
      },
      text: {
          fontSize: 20,
          fontWeight: 'bold',
          color: '#fff',
      },
    txt: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        top: -30,
        left: 50,
        color: 'white',
    },
    txt1: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        top: -20,
        left: 100,
        color: 'white',
    },
    txt2: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        top: -10,
        left: 30,
        color: 'white',
    },
    story1:{
        height: 200,
        width: 150,
    },
    story2:{
        height: 200,
        width: 150,
    },
    story3:{
        height: 200,
        width: 150,
    },
    story4:{
        height: 200,
        width: 150,
    },
    touch1: {
        height: 200,
        width: 150,
        top: 0,
        left: 40,
        backgroundColor: 'black',
    },
    touch2: {
        height: 200,
        width: 150,
        backgroundColor: 'black',
        top: -200,
        left: 220,
    },
    touch3: {
        height: 200,
        width: 150,
        backgroundColor: 'black',
        top: -190,
        left: 40,
    },
    touch4: {
        height: 200,
        width: 150,
        backgroundColor: 'black',
        top: -390,
        left: 220,
    }
})