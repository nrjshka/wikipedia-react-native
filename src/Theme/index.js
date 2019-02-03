import React, { createContext, PureComponent } from 'react';

import { themeVariables, themes } from './settings';

export const { Provider, Consumer } = createContext();

type Props = {};
export default class ThemeController extends PureComponent<Props> {
  state = {
    currentThemeId: 0,
    currentTheme: themeVariables[0],
  }

  changeTheme = () => {
    const { currentThemeId } = this.state;
    const themeLength = themeVariables.length;

    const newThemeId = (currentThemeId + 1) % themeLength;

    this.setState({ 
      currentThemeId: newThemeId, 
      currentTheme: themeVariables[newThemeId], 
    });
  }

  render() {
    const { currentTheme, themeConfig } = this.state;

    const props = {
      ...this.state,
      currentThemeConfig: themes[currentTheme],
      changeTheme: this.changeTheme,
    };

    return (
      <Provider value={props}>
        {this.props.children}
      </Provider>
    );
  }
};