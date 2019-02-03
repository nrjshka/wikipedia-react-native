import React, { Component } from 'react';
import { Alert, Text, View, Button, Image, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

type Props = {};
class Home extends Component<Props> {
  render() {
    return (
      <View style={{backgroundColor: '#FFF', flex: 1, justifyContent: 'center'}}>
        <Text>Home</Text>
      </View>
    );
  }
}

class Settings extends Component<Props> {
  render() {
    return (
      <View style={{backgroundColor: '#FFF', flex: 1, justifyContent: 'center'}}>
        <Text>Settings</Text>
      </View>
    );
  }
}

export default createAppContainer(
  createMaterialBottomTabNavigator({
    Home: { screen: Home },
    Settings: { screen: Settings },
  }, {
    initialRouteName: 'Home',
  })
);
