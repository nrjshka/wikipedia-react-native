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
            <View style={styles(currentThemeConfig).homeHeader}>
              <TextInput
                style={styles(currentThemeConfig).homeTextInput}
                placeholder="🔍 Поиск статьи по названию"
                placeholderTextColor={currentThemeConfig.color}
              />
            </View>
          </View>
        )}
      </Consumer>
    );
  }
}

const styles = ({ backgroundColor, header }) => StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor,
  },
  homeHeader: {
    paddingTop: 40,
    paddingBottom: 30,
    marginBottom: 2,
    height: 100,
    width: '100%',
    backgroundColor: header.backgroundColor,
  },
  homeTextInput: {
    width: '90%',
    height: 30,
    textAlign: 'center',
    backgroundColor,
    color: header.color,
    height: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  }
});
