import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createAppContainer} from 'react-navigation'; 
import { createBottomTabNavigator} from 'react-navigation-tabs'; 
// You can import from local files
import InstagramScreen from './screens/InstagramScreen';
import FacebookScreen from './screens/FacebookScreen';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
  
      //<View >
        <Appcontainer />
          
      //</View>
      
    )
  }
}

var TabNavigator= createBottomTabNavigator({
  Facebook:{screen:FacebookScreen} ,
  Instagram:{screen:InstagramScreen}
})
const Appcontainer = createAppContainer(TabNavigator)