import React from 'react';
import { StyleSheet, View, ImageBackground, Text, StatusBar } from 'react-native';
import image from '../../assets/register.png'
export default function Profile(){
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.Wallpaper}>
                <StatusBar hidden={false} />
                <Text style={styles.txt1}>Profile Page</Text>
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
})