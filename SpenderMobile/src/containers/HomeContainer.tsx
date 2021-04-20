/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { SpendCoreView } from '../components/SpendCore/SpendCore';

interface IHomeProps {
    user: null,
}

const HomeContainer: FunctionComponent<{ initial?: IHomeProps }> = ({ initial = null }) => {
  return <>
    <View style={[styles.container]}>

    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }} />
      <SpendCoreView />
      <View style={{ flex: 1 }} />
    </View>
    </View>
  </>;};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
});

export default HomeContainer;
