import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';




export function DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 20}}>
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Johnrich Buban</Title>
                                <Caption style={styles.caption}>jrmbuban02</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph]}>100k</Paragraph>
                                <Caption style={styles.caption1}>Followers</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph]}>50</Paragraph>
                                <Caption style={styles.caption1}>Following</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-home-outline" 
                                color='#fff'
                                size={size}
                                />
                            )}
                            labelStyle={{
                                color: '#fff',
                                fontSize: 18
                            }}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-person-outline" 
                                color='#fff'
                                size={size}
                                />
                            )}
                            labelStyle={{
                                color: '#fff',
                                fontSize: 18
                            }}
                            label="About"
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-logo-react" 
                                color='#fff'
                                size={size}
                                />
                            )}
                            labelStyle={{
                                color: '#fff',
                                fontSize: 18
                            }}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                       
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="ios-log-out-outline" 
                        color= '#fff'
                        size={size}
                        />
                    )}
                    labelStyle={{
                        color: '#fff'
                    }}
                    label="Sign Out"
                    onPress={() => {props.navigation.navigate('Login')}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 23,
      marginTop: 20,
      marginBottom: 5,
      fontWeight: 'bold',
      color:'#fff'
    },
    caption: {
      paddingTop: 10,
      fontSize: 16,
      lineHeight: 16,
      color:'#fff',
    },
    caption1: {
        fontSize: 17,
        lineHeight: 17,
        color:'#fff'
      },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20,
      position:'relative'
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 5,
      fontSize: 20,
      color:'#fff',
      
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        borderTopColor: '#fff',
        borderTopWidth: 2,
        backgroundColor: '#5582c1',
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });