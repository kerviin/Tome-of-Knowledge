import React from 'react';
import { StyleSheet, View, ImageBackground, Text, StatusBar } from 'react-native';
import image from '../../assets/register.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';

const navigation = navigation;
export default function Story4({navigation}){
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.Wallpaper}>
                <StatusBar hidden={false} />
                <Icon name="arrow-left" style={styles.arrow} type="entypo" onPress={ () => navigation.navigate('Message', {name: 'Message'})}/>
                <Text style={styles.txt1}>Toby's Story</Text>
                <Text style={styles.txt2}>(A Dogs Purpose)</Text>
                <Text style={styles.synopsis}>A Dog's Purpose Puppy Tale is the story of a beagle named Toby who lives on a 
                    farm with his mother and his siblings. When Toby was first let out of his dog pen, 
                    he started running right away because he loved to run. A few days later, Toby's 
                    owner gave him dog food that looked like brown mush.</Text>
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
        fontSize: 18,
        top: 20,
        left: 120,
        color: 'white',
    },
    arrow: {
        color: 'white',
        left: 30,  
        top: 30,
        fontSize: 30,
    },
    synopsis: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'justify',
        fontSize: 19,
        width: 350,
        top: 40,
        left: 30,
        color: 'white',
    },
})