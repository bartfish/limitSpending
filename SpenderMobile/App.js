import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastProvider } from 'react-native-styled-toast';
import configureStore from './src/redux/store';

import { NavigationContainer } from '@react-navigation/native';
import theme from './src/styles/theme';
import DrawerNavigation from './src/components/DrawerNavigation';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>

        <Provider store={configureStore}>
          <NavigationContainer>
            <DrawerNavigation />
          </NavigationContainer>
        </Provider>

      </ToastProvider>
  </ThemeProvider>

  );
}
