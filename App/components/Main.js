import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, StatusBar } from 'react-native';
import image from '../../assets/main.png'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const NavigationStack = createStackNavigator();
const navigation = navigation;
export default function Main({navigation}){
    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.Wallpaper}>
            <StatusBar hidden={false} />
            <TouchableOpacity activeOpacity={0.95} style={styles.button} >
             <Text style={styles.text} onPress={ () => navigation.navigate('Login', {name: 'Login'})}>Get Started</Text>
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
        height: 50, 
        width: 150,
        backgroundColor: '#034e67',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 550,
        marginLeft: 130,
        borderRadius: 100,
        padding: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    
})
