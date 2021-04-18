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
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeContainer}
          options={{ title: 'Home screen' }}
        />
        <Stack.Screen name="TransactionHistory" component={TransactionHistoryComponent} />
      </Stack.Navigator>
        {/* <View style={styles.container}>
          <HomeContainer />
        </View> */}

      </NavigationContainer>
    </Provider>

  );
}