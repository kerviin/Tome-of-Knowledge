import React from 'react';
import { StyleSheet, View, ImageBackground, Text, StatusBar, TouchableOpacity } from 'react-native';
import image from '../../assets/register.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';

const navigation = navigation;
export default function Story1({navigation}){
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.Wallpaper}>
                <StatusBar hidden={false} />
                <Icon name="arrow-left" style={styles.arrow} type="entypo" onPress={ () => navigation.navigate('Message', {name: 'Message'})}/>
                <Text style={styles.txt1}>See Me</Text>
                <Text style={styles.txt2}>By Nicholas Spark</Text>
                <Text style={styles.synopsis}>At twenty-eight, he's focused on getting his teaching degree and
                                        avoiding all the places and people that proved so destructive in his
                                        past. The last thing he's looking for is a serious relationship. But
                                        when he crosses paths with Maria Sanchez one rainswept night, his
                                        carefully structured life is turned upside down. And when Maria, a
                                        hardworking lawyer, meets Colin she begins to question every notion
                                        she has ever had about herself and her future - and what truly makes
                                        her happy. Before the couple has a chance to envision a life together,
                                        menacing reminders from events in Maria's past start to surface. And
                                        as the threat of violence begins to shadow her every step, she and
                                        Colin will be pushed to breaking point.</Text>
                <TouchableOpacity activeOpacity={0.95} style={styles.button}>
                <Text style={styles.txt} onPress={ () => navigation.navigate('Nicholas', {name: 'Nicholas'})}>Read</Text>
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
    button: {
        flexDirection: 'row', 
        height: 40, 
        width: 130,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginLeft: 250,
        borderRadius: 50,
        padding: 10,
      },
    txt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    txt1: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        top: 20,
        left: 150,
        color: 'white',
    },
    txt2: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        top: 20,
        left: 135,
        color: 'white',
    },
    txt3: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        top: 100,
        left: 50,
        color: 'white',
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
    arrow: {
        color: 'white',
        left: 30,  
        top: 30,
        fontSize: 30,
    },
})