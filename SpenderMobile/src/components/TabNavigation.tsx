/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import HomeContainer from '../containers/HomeContainer';
import TransactionHistoryComponent from '../containers/TransactionHistoryContainer';

const Tab = createMaterialBottomTabNavigator();

export const TabNavigation = () => {

  const NAVIGATION_ICONS_SIZE = 15;
  return (
    <Tab.Navigator
      initialRouteName="HomeContainer"
      activeColor="#fff"
      barStyle={{
          backgroundColor: '#222',
    }}
    >
      <Tab.Screen
        name="Limitations"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name={'calculator'} color={color} size={NAVIGATION_ICONS_SIZE} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeContainer"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name={'calculator'} color={color} size={NAVIGATION_ICONS_SIZE} />
          ),
        }}
      />
      <Tab.Screen
        name="TransactionHistory"
        component={TransactionHistoryComponent}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name={'history'} color={color} size={NAVIGATION_ICONS_SIZE} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
