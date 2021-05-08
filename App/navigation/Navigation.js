import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './App/components/Login';
import RegistScreen from './App/components/Register';

const NavigationStack = createStackNavigator({
    LoginScreen:{screen:Login},
    RegistScreen:{screen:Register},
    HomeScreen:{screen:Home},
});

export default Navigation(NavigationStack);