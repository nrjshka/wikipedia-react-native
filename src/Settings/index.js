import React, { Component } from 'react';
import { Text, View } from 'react-native';

type Props = {};
export default class Settings extends Component<Props> {
  render() {
    return (
      <View style={{backgroundColor: '#FFF', flex: 1, justifyContent: 'center'}}>
        <Text>Settings</Text>
      </View>
    );
  }
}