import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground, Image, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import image from '../../assets/register.png'
import logo from '../../assets/logo.png'

const NavigationStack = createStackNavigator();
const navigation = navigation;
export default function Login({navigation}) {
    return(
        <View  style={styles.styles}>
            <StatusBar hidden={false} />  
            <ImageBackground source={image} style={styles.Wallpaper}>
            <Image source={logo} style={styles.logo}></Image>
            <Text style={styles.text}>Login</Text>
            <Text style={styles.label}  onPress={ () => navigation.navigate('Register', {name: 'Register'})}>Don't have account? Register Here</Text>
            <Text style={styles.l1}>Username</Text>
            <Text style={styles.l2}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
            />
            <TextInput
                style={styles.input1}
                placeholder="Password"
                secureTextEntry={true}
            />
            <TouchableOpacity activeOpacity={0.95} style={styles.button}>
                <Text style={styles.txt} onPress={ () => navigation.navigate('Home', {name: 'Home'})}>Login</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    )
    
}

const styles = StyleSheet.create({
    styles: {
        flex: 1,
        flexDirection: "column",
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        top: 100,
        left: 160,
        color: 'white',
    },
    label:{
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        top: 400,
        left: 110,
    },
    l1: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        top: 100,
        left: 60,
        color: 'white',
    },
    l2: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        top: 170,
        left: 60,
        color: 'white',
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        top: 80,
        left: 50,
        backgroundColor: 'white',
    },
    input1: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        top: 110,
        left: 50,
        backgroundColor: 'white',
    },
    button: {
        flexDirection: 'row', 
        height: 50, 
        width: 130,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 120,
        marginLeft: 150,
        borderRadius: 50,
        padding: 10,
      },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    Wallpaper: {
        flex: 1,
        resizeMode: "cover",
      },
    logo:{
        height: 150,
        width: 150,
        top: 70,
        left: 130,
    }
});

    