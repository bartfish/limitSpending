/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import StackNavigator from './StackNavigation';
import { loadTransactionList } from '../../services/persist/Transactions/loadTransactionList';
import { loadLimit } from '../../services/persist/Limits/loadLimit';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="HomeContainer"
        onPress={() => props.navigation.navigate('HomeContainer')}
      />
      <DrawerItem
        label="TransactionHistoryContainer"
        onPress={() => props.navigation.navigate('TransactionHistoryContainer')}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {

  loadTransactionList(3);
  loadLimit(3);

  return (
    <Drawer.Navigator
      initialRouteName="HomeContainer"
      drawerPosition="right"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Stack" component={StackNavigator} />

    
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
