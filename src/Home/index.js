import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Consumer } from '../Theme/';

type Props = {};
export default class Home extends PureComponent<Props> {
  render() {
    return (
      <Consumer>
        {({ currentThemeConfig }) => (
          <View style={styles(currentThemeConfig.backgroundColor).homeContainer}>
            <Text>Home</Text>
          </View>
        )}
      </Consumer>
    );
  }
}

const styles = backgroundColor => StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor,
  },
});
