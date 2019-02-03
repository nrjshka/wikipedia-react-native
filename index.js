/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import Application from './src/';
import { name as appName } from './app.json';
import Theme from './src/Theme/';

const App = () => (
  <Theme>
    <Application />
  </Theme>
);

AppRegistry.registerComponent(appName, () => App);
