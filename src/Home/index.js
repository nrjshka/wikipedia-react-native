import React, { Component } from 'react';
import { Text, View } from 'react-native';

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <View style={{backgroundColor: '#FFF', flex: 1, justifyContent: 'center'}}>
        <Text>Home</Text>
      </View>
    );
  }
}