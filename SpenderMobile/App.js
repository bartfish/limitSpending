import React from 'react';
import { Provider } from 'react-redux';
import HomeContainer from './src/containers/HomeContainer';
import configureStore from './src/redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionHistoryComponent from './src/containers/TransactionHistoryContainer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={configureStore}>
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#222',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerHideShadow: true,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeContainer}
          options={{ title: 'Limit your spendings' }}
        />
        <Stack.Screen
          name="TransactionHistory"
          component={TransactionHistoryComponent}
          options={{ title: 'Transaction history' }}
        />
      </Stack.Navigator>

      </NavigationContainer>
    </Provider>

  );
}
