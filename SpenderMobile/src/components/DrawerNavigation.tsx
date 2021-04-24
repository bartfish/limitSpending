/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainContainer from '../containers/MainContainer';
import TransactionHistoryComponent from '../containers/TransactionHistoryContainer';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
        initialRouteName="Main"
    >
        <Drawer.Screen name="Main" component={MainContainer} />
        <Drawer.Screen name="Limits" component={TransactionHistoryComponent} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;