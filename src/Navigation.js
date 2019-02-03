import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home/';
import Settings from './Settings/';

export default createAppContainer(
  createMaterialBottomTabNavigator({
    Home: { 
      screen: Home, 
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => 
          <Icon name="ios-home" color={tintColor} size={24} />
      }
    },
    Settings: { 
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => 
          <Icon name="ios-settings" color={tintColor} size={24} />
      }
    },
  }, {
    initialRouteName: 'Home',
    barStyle: {
      backgroundColor: 'white',
      paddingBottom: 0,
      paddingTop: 0,
    }, 
    tabBarOptions: {
      showLabel: false,
    },
  })
);
