import React, { PureComponent } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import { Consumer } from '../Theme/';

type Props = {};
export default class Home extends PureComponent<Props> {
  render() {
    return (
      <Consumer>
        {({ currentThemeConfig }) => (
          <View style={styles(currentThemeConfig).homeContainer}>
            <TextInput
              style={styles(currentThemeConfig).homeTextInput}
              placeholder="🔍 Поиск статьи по названию"
            />
          </View>
        )}
      </Consumer>
    );
  }
}

const styles = ({ backgroundColor }) => StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor,
    paddingTop: 40,
  },
  homeTextInput: {
    width: '90%',
    height: 30,
    textAlign: 'center',
    backgroundColor: 'white',
    height: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 30,
  }
});
