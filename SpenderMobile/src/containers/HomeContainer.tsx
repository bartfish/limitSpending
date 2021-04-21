/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { SpendCoreView } from '../components/SpendCore/SpendCore';

const HomeContainer: FunctionComponent<any> = () => {
  return <>
    <View style={[styles.container]}>

      <TouchableOpacity
        style={{ alignSelf: 'flex-end', width: 60, height: 60, bacgroundColor: '#ddd' }}
        >
          <FontAwesome 
            style={{ 
              color: '#fff',
              width: '100%',
            }}
            name={'settings'} 
            size={15} />
      </TouchableOpacity>

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
