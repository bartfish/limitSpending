/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import HomeContainer from '../../containers/HomeContainer';
import TransactionHistoryContainer from '../../containers/TransactionHistoryContainer';
import LimitBoxContainer from '../../containers/LimitBoxContainer';

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {

  const NAVIGATION_ICONS_SIZE = 23;
  return (
    <Tab.Navigator
      activeColor="#fff"
      barStyle={{
          backgroundColor: '#222',
      }}
      >
      <Tab.Screen
        name="Limitations"
        component={LimitBoxContainer}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name={'piggy-bank'} color={color} size={NAVIGATION_ICONS_SIZE} />
          ),
          tabBarLabel: null,
        }}
      />
      <Tab.Screen
        name="HomeContainer"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name={'calculator'} color={color} size={NAVIGATION_ICONS_SIZE} />
          ),
          tabBarLabel: null,
        }}
      />
      <Tab.Screen
        name="TransactionHistory"
        component={TransactionHistoryContainer}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name={'history'} color={color} size={NAVIGATION_ICONS_SIZE} />
          ),
          tabBarLabel: null,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
