import React from 'react';
import { StyleSheet, View, ImageBackground, Text, StatusBar, TouchableOpacity } from 'react-native';
import image from '../../assets/register.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';

const navigation = navigation;
export default function Story2({navigation}){
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.Wallpaper}>
                <StatusBar hidden={false} />
                <Icon name="arrow-left" style={styles.arrow} type="entypo" onPress={ () => navigation.navigate('Message', {name: 'Message'})}/>
                <Text style={styles.txt1}>The Time Traveller's</Text>
                <Text style={styles.txt2}>Wife</Text>
                <Text style={styles.txt3}>Chapter 1</Text>
                <Text style={styles.txt4}>................</Text>
                <Text style={styles.txtch1}>Chapter 2</Text>
                <Text style={styles.txtch2}>................</Text>
                <TouchableOpacity activeOpacity={0.95} style={styles.button1} onPress={ () => navigation.navigate('TravelWife', {name: 'TravelWife'})}>
                    <Text style={styles.text1}>Read</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.95} style={styles.button2}>
                <Icon name="lock" style={styles.lock} type="entypo"/>
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
    button1: {
        flexDirection: 'row', 
        height: 40, 
        width: 80,
        backgroundColor: 'transparent',
        borderColor:'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -110,
        marginLeft: 310,
        borderRadius: 50,
        padding: 10,
    },
    text1: {
          fontSize: 20,
          fontWeight: 'bold',
          color: '#fff',
    },
    button2: {
        flexDirection: 'row', 
        height: 40, 
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginLeft: 310,
        borderRadius: 50,
        padding: 10,
    },
    text2: {
          fontSize: 20,
          fontWeight: 'bold',
          color: '#fff',
    },
    txt1: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        top: 30,
        left: 50,
        color: 'white',
    },
    txt2: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        top: 30,
        left: 160,
        color: 'white',
    },
    txt3: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        top: 60,
        left: 40,
        color: 'white',
    },
    txt4: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        top: 20,
        left: 160,
        color: 'white',
    },
    txtch1: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        top: 60,
        left: 40,
        color: 'white',
    },
    txtch2: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        top: 20,
        left: 160,
        color: 'white',
    },
    arrow: {
        color: 'white',
        left: 30,  
        top: 30,
        fontSize: 30,
    },
    lock: {
        color: 'white',
        fontSize: 30,
    },
})