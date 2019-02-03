import React, { Component } from 'react';
import { Alert, Text, View, Button, Image, TextInput } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{backgroundColor: '#FFF', flex: 1, justifyContent: 'center'}}>
        <Text>Text</Text>
      </View>
    );
  }
}
