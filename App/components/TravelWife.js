import React from 'react';
import { View, StyleSheet, ImageBackground, Text, SafeAreaView, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import image from '../../assets/content.png'
import Icon from 'react-native-vector-icons/FontAwesome';

const navigation = navigation;
export default function TravelWife({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <ImageBackground source={image} style={styles.Wallpaper}>
                    <Icon name="arrow-left" style={styles.arrow} type="entypo" onPress={ () => navigation.navigate('Story2', {name: 'Story2'})}/>
                    <Text style={styles.txt1}>Chapter 1</Text>
                    <Text style={styles.body}>CLARE: The library is cool and smells like carpet cleaner, although all I can see is marble. I sign the Visitors’ Log: Clare 
                    Abshire, 11:15 10-26-91 Special Collections. I have never been in the Newberry Library before, and now that I’ve gotten 
                    past the dark, foreboding entrance I am excited. I have a sort of Christmas-morning sense of the library as a big box full of 
                    beautiful books. The elevator is dimly lit, almost silent. I stop on the third floor and fill out an application for a Reader’s
                    Card, then I go upstairs to Special Collections. My boot heels rap the wooden floor. The room is quiet and crowded, full of 
                    solid, heavy tables piled with books and surrounded by readers. Chicago autumn morning light shines through the tall 
                    windows. I approach the desk and collect a stack of call slips. I’m writing a paper for an art history class. My research 
                    topic is the Kelmscott Press Chaucer. I look up the book itself and fill out a call slip for it. But I also want to read about 
                    papermaking at Kelmscott. The catalog is confusing. I go back to the desk to ask for help. As I explain to the woman what 
                    I am trying to find, she glances over my shoulder at someone passing behind me. “Perhaps Mr. DeTamble can help you,” 
                    she says. I turn, prepared to start explaining again, and find myself face to face with Henry. I am speechless. Here is Henry, calm, clothed, younger than I have ever seen him. Henry is working at the Newberry 
                    Library, standing in front of me, in the present. Here and now. I am jubilant. Henry is looking at me patiently, uncertain but 
                    polite. 
                    “Is there something I can help you with?” he asks. 
                    “Henry!” I can barely refrain from throwing my arms around him. It is obvious that he has never seen me before in his 
                    life. 
                    “Have we met? I’m sorry, I don’t...” Henry is glancing around us, worrying that readers, co-workers are noticing us, 
                    searching his memory and realizing that some future self of his has met this radiantly happy girl standing in front of him. 
                    The last time I saw him he was sucking my toes in the Meadow. 
                    I try to explain. “I’m Clare Abshire. I knew you when I was a little girl.,.” I’m at a loss because I am in love with a man 
                    who is standing before me with no memories of me at all. Everything is in the future for him. I want to laugh at the 
                    weirdness of the whole thing. I’m flooded with years of knowledge of Henry, while he’s looking at me perplexed and 
                    fearful. Henry wearing my dad’s old fishing trousers, patiently quizzing me on multiplication tables, French verbs, all the 
                    state capitals; Henry laughing at some peculiar lunch my seven-year-old self has brought to the Meadow; Henry wearing 
                    a tuxedo, undoing the studs of his shirt with shaking hands on my eighteenth birthday. Here! Now! “Come and have 
                    coffee with me, or dinner or something...” Surely he has to say yes, this Henry who loves me in the past and the future 
                    must love me now in some bat-squeak echo of other time. To my immense relief he does say yes. We plan to meet 
                    tonight at a nearby Thai restaurant, all the while under the amazed gaze of the woman behind the desk, and I leave, 
                    forgetting about Kelmscott and Chaucer and floating down the marble stairs, through the lobby and out into the October 
                    Chicago sun, running across the park scattering small dogs and squirrels, whooping and rejoicing. 
                    HENRY: It’s a routine day in October, sunny and crisp. I’m at work in a small windowless humidity-controlled room on the 
                    fourth floor of the Newberry, cataloging a collection of marbled papers that has recently been donated, The papers are 
                    beautiful, but cataloging is dull, and I am feeling bored and sorry for myself. In fact, I am feeling old, in the way only a 
                    twenty-eight-year-old can after staying up half the night drinking overpriced vodka and trying, without success, to win 
                    himself back into the good graces of Ingrid Carmichel. We spent the entire evening fighting, and now I can’t even 
                    remember what we were fighting about. My head is throbbing. I need coffee. Leaving the marbled papers in a state of 
                    controlled chaos, I walk through the office and past the page’s desk in the Reading Room. I am halted by Isabelle’s voice 
                    saying, “Perhaps Mr. DeTamble can help you,” by which she means “Henry, you weasel, where are you slinking off to?” 
                    And this astoundingly beautiful amber-haired tall slim girl turns around and looks at me as though I am her personal 
                    Jesus. My stomach lurches. Obviously she knows me, and I don’t know her. Lord only knows what I have said, done, or 
                    promised to this luminous creature, so I am forced to say in my best librarianese, “Is there something I can help you 
                    with?” The girl sort of breathes “Henry!” in this very evocative way that convinces me that at some point in time we have a 
                    really amazing thing together. This makes it worse that I don’t know anything about her, not even her name. I say “Have 
                    we met?” and Isabelle gives me a look that says You asshole. But the girl says, “I’m Clare Abshire. I knew you when I 
                    was a little girl,” and invites me out to dinner. I accept, stunned. She is glowing at me, although I am unshaven and hung 
                    over and just not at my best. We are going to meet for dinner this very evening, at the Beau Thai, and Clare, having 
                    secured me for later, wafts out of the Reading Room. 
                    As I stand in the elevator, dazed, I realize that a massive winning lottery ticket chunk of my future has somehow found 
                    me here in the present, and I start to laugh. I cross the lobby, and as I run down the stairs to the street I see Clare running
                    across Washington Square, jumping and whooping, and I am near tears and I don’t know why. To be continue...</Text>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
      },
    scrollView: {
        
        backgroundColor: 'lightblue',
        width: '100%',
    },
    Wallpaper: {
        flex: 1,
        resizeMode: "cover",
    },
    arrow: {
        color: 'white',
        left: 30,  
        top: 30,
        fontSize: 30,
    },
    txt1: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        top: 20,
        left: 130,
        color: 'white',
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'justify',
        fontSize: 19,
        width: 350,
        top: 60,
        left: 30,
        color: 'white',
    },
})