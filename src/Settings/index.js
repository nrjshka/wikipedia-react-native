import React, { PureComponent } from 'react';
import { Text, Switch, View, StatusBar } from 'react-native';

import { Consumer } from '../Theme/';

type Props = {};
export default class Settings extends PureComponent<Props> {
  render() {
    return (
      <Consumer>
        {({ changeTheme, currentTheme, currentThemeConfig }) => (
          <View 
            style={{
              flex: 1, 
              justifyContent: 'flex-start', 
              paddingTop: 40,
              backgroundColor: currentThemeConfig.backgroundColor
            }}
          >
            <View style={{flexDirection: 'row'}}>
              <Text style={{
                flex: 1,
                color: currentThemeConfig.color,
              }}>Dark theme</Text>
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