import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground, StatusBar, Button } from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import image from '../../assets/register.png'

const NavigationStack = createStackNavigator();
const navigation = navigation;
export default function Register({navigation}) {
    return(
        <View  style={styles.styles}>
            <StatusBar hidden={false} />  
            <ImageBackground source={image} style={styles.Wallpaper}>
            <Icon name="arrow-left" style={styles.arrow} type="entypo" onPress={ () => navigation.navigate('Login', {name: 'Login'})}/>
            <Text style={styles.text}>Registration</Text>
            <Text style={styles.l1}>Username</Text>
            <Text style={styles.l2}>Email</Text>
            <Text style={styles.l3}>Password</Text>
            <Text style={styles.l4}>Confirmpassword</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
            />
            <TextInput
                style={styles.input1}
                placeholder="Email"
            />
            <TextInput
                style={styles.input2}
                placeholder="Password"
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input3}
                placeholder="Confirm Password"
                secureTextEntry={true}
            />
            <TouchableOpacity activeOpacity={0.95} style={styles.button}>
                <Text style={styles.txt}>Register</Text>
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
    arrow: {
        color: 'white',
        left: 30,  
        top: 30,
        fontSize: 30,
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        left: 100,
        color: 'white',
    },
    l1: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        top: 80,
        left: 60,
        color: 'white',
    },
    l2: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        top: 150,
        left: 60,
        color: 'white',
    },
    l3: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        top: 210,
        left: 60,
        color: 'white',
    },
    l4: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        top: 280,
        left: 60,
        color: 'white',
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        top: 0,
        left: 50,
        backgroundColor: 'white',
    },
    input1: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        top: 30,
        left: 50,
        backgroundColor: 'white',
    },
    input2: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        top: 60,
        left: 50,
        backgroundColor: 'white',
    },
    input3: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        top: 90,
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
});
    