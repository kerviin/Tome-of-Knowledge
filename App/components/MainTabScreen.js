import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Home';
import AboutScreen from './About';
import ListScreen from './List';
import { createStackNavigator } from '@react-navigation/stack';


const HomeStack = createStackNavigator();
const MessageStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {

    return(
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="rgba(0, 0, 0, 1)"
      barStyle={{ backgroundColor: '#5582c1' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'black',
          LabelColor:'black',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color='#fff' size={26} />
          ),
        }}
      />
     
        <Tab.Screen
        name="Message"
        component={ListStackScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarColor: 'black',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-library" color='#fff' size={26} />
          ),
        }}
      /> 
       <Tab.Screen
        name="About"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'About',
          tabBarColor: 'black',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color='#fff' size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    );

};




export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      },
      title:null,
      headerShown: false

    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{}}/>
  </HomeStack.Navigator>
);


const ListStackScreen = ({navigation}) => (
  <MessageStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#FFC0CB",
      },
      title:null,
      headerShown: false
    }}>
      <MessageStack.Screen name="Message" component={ListScreen} options={{
        headerLeft: () => (
          <Icon.Button name="menu-outline" size={33} 
          backgroundColor="black"
          onPress={() => {navigation.openDrawer()}}>  
          </Icon.Button>
        )
      }}/>
      <MessageStack.Screen name="Chat" component={ListScreen} options={({route}) => ({
        title: route.params.userName,
        headerTitleAlign:'center',
        headerStyle:{
          height: 100,
          backgroundColor:"#FFC0CB",
        },
        headerTitleStyle:{fontFamily: "monospace", fontSize: 30, fontWeight: 'bold'},
        headerTitleContainerStyle: { paddingTop: 30 } 
    })}
    />

  </MessageStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#FFC0CB",
      },
      title:null,
      headerShown: false
    }}>
      <ProfileStack.Screen name="About" component={AboutScreen} options={{
        headerLeft: () => (
          <Icon.Button name="menu-outline" size={33} 
          backgroundColor="black"
          onPress={() => {navigation.openDrawer()}}>  
          </Icon.Button>
        )
      }}/>
  </ProfileStack.Navigator>
);