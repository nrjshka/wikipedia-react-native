import React, { memo } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';

import Theme, { Consumer } from './Theme/';
import Navigation from './Navigation';

export default memo(() => (
  <Theme>
    <Consumer>
      {({ currentThemeConfig }) => (
        <View style={styles(currentThemeConfig.backgroundColor).App}>
          <StatusBar
            barStyle={currentThemeConfig.statusBarStyle}
          />
          <Navigation currentThemeConfig={currentThemeConfig} />
        </View>
      )}
    </Consumer>
  </Theme>
));

const styles = backgroundColor => StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor,
  },
});