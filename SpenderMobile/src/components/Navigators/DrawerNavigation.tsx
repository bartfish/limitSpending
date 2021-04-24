/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import StackNavigator from './StackNavigation';

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
