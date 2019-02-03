import React from 'react';
import { View, StatusBar } from 'react-native';

import Theme, { Consumer } from './Theme/';
import Navigation from './Navigation';

export default () => (
  <Theme>
    <Consumer>
      {({ currentThemeConfig }) => (
        <View style={{ flex: 1}}>
          <StatusBar
            barStyle={currentThemeConfig.statusBarStyle}
          />
          <Navigation />
        </View>
      )}
    </Consumer>
  </Theme>
);
