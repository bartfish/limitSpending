import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';

import LimitBoxContainer from '../../containers/LimitBoxContainer';
import TransactionHistoryContainer from '../../containers/TransactionHistoryContainer';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const getHeaderTitle = (route) => {
  return getFocusedRouteNameFromRoute(route) ?? 'HomeContainer';
};

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Stack.Screen name="TransactionHistoryContainer" component={TransactionHistoryContainer} />
      <Stack.Screen name="LimitBoxContainer" component={LimitBoxContainer} />
      <Stack.Screen name="Limits2" component={TransactionHistoryContainer} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
