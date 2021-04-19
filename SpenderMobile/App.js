import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'
import { ToastProvider } from 'react-native-styled-toast'
// import HomeContainer from './src/containers/HomeContainer';
import configureStore from './src/redux/store';

import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import TransactionHistoryComponent from './src/containers/TransactionHistoryContainer';
import { TabNavigation } from './src/components/TabNavigation';

import theme from './src/styles/theme';

// const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <Provider store={configureStore}>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </Provider>

      </ToastProvider>
  </ThemeProvider>

  );
}
