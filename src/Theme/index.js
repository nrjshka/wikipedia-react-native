import React, { createContext, PureComponent } from 'react';

export const { Provider, Context } = createContext();

type Props = {};
export default class ThemeController extends PureComponent<Props> {
  state = {
    currentTheme: 'dark',
    themeConfig: {},
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
};