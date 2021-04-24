import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';

import LimitBoxContainer from '../../containers/LimitBoxContainer';
import TransactionHistoryContainer from '../../containers/TransactionHistoryContainer';
import TabNavigation from './TabNavigation';
import CustomNavigationBar from './CustomNavigationBar';

const Stack = createStackNavigator();

const getHeaderTitle = (route) => {
  return getFocusedRouteNameFromRoute(route) ?? 'HomeContainer';
};

const StackNavigator = (props) => {
  return (
    <Stack.Navigator 
        screenOptions={{
            header: (props) => <CustomNavigationBar navigation={props.navigation} previous={props.previous} />,
          }}>
      <Stack.Screen
        name="Tabs"
        component={TabNavigation} />
      <Stack.Screen name="TransactionHistoryContainer" component={TransactionHistoryContainer} />
      <Stack.Screen name="LimitBoxContainer" component={LimitBoxContainer} />
      <Stack.Screen name="Limits2" component={TransactionHistoryContainer} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
