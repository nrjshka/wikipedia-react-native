import React, { memo } from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home/';
import Settings from './Settings/';
import { Consumer } from './Theme/';

export default memo(props => {
  const { currentThemeConfig } = props;

  const Navigation = createAppContainer(
    createMaterialBottomTabNavigator({
      Home: { 
        screen: Home, 
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => 
            <Icon name="ios-home" color={tintColor} size={24} />
        }
      },
      Settings: { 
        screen: Settings,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => 
            <Icon name="ios-settings" color={tintColor} size={24} />
        }
      },
    }, {
      initialRouteName: 'Home',
      activeColor: currentThemeConfig.nav.activeColor,
      inactiveColor: currentThemeConfig.nav.inactiveColor,
      barStyle: {
        backgroundColor: currentThemeConfig.backgroundColor,
        paddingBottom: 0,
        paddingTop: 0,
      },
    })
  );

  return (
    <Navigation {...props} />
  );
});
