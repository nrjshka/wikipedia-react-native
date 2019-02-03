export const themes = {
  dark: {
    backgroundColor: '#1A222C',
    color: 'white',
    statusBarStyle: 'light-content',
    nav: {
      activeColor: '#51A5F8',
      inactiveColor: '#466A93',
    },
    header: {
      backgroundColor: '#24303F',
      color: 'white',
    }
  },
  white: {
    backgroundColor: 'white',
    color: 'black',
    statusBarStyle: 'dark-content',
    nav: {
      activeColor: '#51A5F8',
      inactiveColor: '#466A93',
    },
    header: {
      backgroundColor: '#F4F4F4',
      color: 'black',
    }
  }
};

export const themeVariables = Object.keys(themes);