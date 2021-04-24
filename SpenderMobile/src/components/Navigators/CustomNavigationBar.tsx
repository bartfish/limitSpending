import React from 'react';
import { Appbar, Menu } from 'react-native-paper';

const CustomNavigationBar = ({ navigation, previous }) => {

    const openMenu = () => navigation.openDrawer();
    const closeMenu = () => navigation.closeDrawer();

  return (
    <Appbar.Header>
       {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="My awesome app" />
      <Appbar.Action icon="menu" color="white" onPress={openMenu} />
    </Appbar.Header>
  );
}

export default CustomNavigationBar;