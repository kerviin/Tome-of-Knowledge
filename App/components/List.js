import React, { useState} from 'react';
import { StyleSheet, View, ImageBackground, Text, TextInput, StatusBar, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import image from '../../assets/register.png'
import story1 from '../../assets/story1.png'
import story2 from '../../assets/story2.png'
import story3 from '../../assets/story3.png'
import story4 from '../../assets/story4.png'
import Searchbar from './SearchBar';
import 'react-native-gesture-handler';

const navigation = navigation;
export default function List({navigation}){
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.Wallpaper}>
                <StatusBar hidden={false} />
                <Text style={styles.txt1}>Library</Text>
                {/* <Image source={progress} style={styles.progress}></Image> */}
                <Searchbar/>
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
        top: 20,
        left: 50,
        color: 'white',
    },
    txt1: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        top: 20,
        left: 150,
        color: 'white',
    },
    progress:{
        width: 300,
        left: 50,
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
        top: 60,
        left: 40,
        backgroundColor: 'black',
    },
    touch2: {
        height: 200,
        width: 150,
        backgroundColor: 'black',
        top: -140,
        left: 220,
    },
    touch3: {
        height: 200,
        width: 150,
        backgroundColor: 'black',
        top: -120,
        left: 40,
    },
    touch4: {
        height: 200,
        width: 150,
        backgroundColor: 'black',
        top: -320,
        left: 220,
    }
})