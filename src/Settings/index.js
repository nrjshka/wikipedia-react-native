import React, { PureComponent } from 'react';
import { Text, Switch, View, StatusBar, StyleSheet } from 'react-native';

import { Consumer } from '../Theme/';

type Props = {};
export default class Settings extends PureComponent<Props> {
  render() {
    return (
      <Consumer>
        {({ changeTheme, currentTheme, currentThemeConfig }) => (
          <View style={style(currentThemeConfig).settingsView}>
            <View style={{flexDirection: 'row'}}>
              <Text style={style(currentThemeConfig).settingsText}>Dark theme</Text>
              <Switch 
                style={{flex: 1}}
                value={currentTheme === 'dark'}
                onValueChange={changeTheme}
              />
            </View>
          </View>
        )}
      </Consumer>
    );
  }
}

const style = ({ backgroundColor, color }) => StyleSheet.create({
  settingsView: {
    flex: 1, 
    justifyContent: 'flex-start', 
    paddingTop: 40,
    backgroundColor,
  },
  settingsText: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: '5%',
    color,
  }
});
