import React from 'react';
import { StyleSheet, View, ImageBackground, Text, StatusBar, Image } from 'react-native';
import image from '../../assets/register.png'
import logo from '../../assets/logo.png'
export default function About(){
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.Wallpaper}>
                <StatusBar hidden={false} />
                <Text style={styles.txt1}>About Page</Text>
                <Text style={styles.txt2}>This mobile application will provide available books to help students and other 
                    people that are interested in reading books. This will help alleviate the boredom of 
                    people since we are still affected by pandemic and lockdowns. The application will 
                    be your own book library. Users will read popular books by different authors. You 
                    may also browse the books, on different genres and types, that you want to read next.</Text>
                <Image source={logo} style={styles.logo}></Image>
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
        left: 100,
        color: 'white',
    },
    txt2: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        width: 350,
        top: 50,
        left: 30,
        color: 'white',
    },
    logo:{
        height: 150,
        width: 150,
        top: 70,
        left: 120,
    }
})