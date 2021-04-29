import React from 'react';
import configureStore from './src/redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import DrawerNavigation from './src/components/Navigators/DrawerNavigation';
import { initializeLimitsTable, initializeTransactionsTable, initializeUserTable } from './src/services/storage/db';
import ThemeContext from './src/contexts/ThemeContext';

const App = () => {

  initializeLimitsTable();
  initializeTransactionsTable();
  initializeUserTable();

  return (
    <ThemeContext.Provider value={{
      theme: 'light',
      setTheme: () => {}
    }}>
      <Provider store={configureStore}>
          <NavigationContainer>
            <DrawerNavigation />
          </NavigationContainer>
      </Provider>
    </ThemeContext.Provider>
  );
};

export default App;
