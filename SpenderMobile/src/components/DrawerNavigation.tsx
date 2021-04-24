/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import MainContainer from '../containers/MainContainer';
import TransactionHistoryComponent from '../containers/TransactionHistoryContainer';
import { TabNavigation } from './TabNavigation';
import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import HomeContainer from '../containers/HomeContainer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function getHeaderTitle(route) {
  return getFocusedRouteNameFromRoute(route) ?? 'HomeContainer';
}

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Stack.Screen name="Limits" component={TransactionHistoryComponent} />
      <Stack.Screen name="Limits1" component={TransactionHistoryComponent} />
      <Stack.Screen name="Limits2" component={TransactionHistoryComponent} />
    </Stack.Navigator>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="HomeContainer"
        onPress={() => props.navigation.navigate('HomeContainer')}
      />
      <DrawerItem
        label="TransactionHistoryComponent"
        onPress={() => props.navigation.navigate('TransactionHistoryComponent')}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeContainer"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Stack" component={StackNavigator} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;