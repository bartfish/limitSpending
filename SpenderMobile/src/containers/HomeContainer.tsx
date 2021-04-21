/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { SpendCoreView } from '../components/SpendCore/SpendCore';

const HomeContainer: FunctionComponent<any> = () => {
  return <>
    <View style={[styles.container]}>

      <View style={{ height: 100, alignItems: 'space-between' }}>
        <TouchableOpacity
          style={{ alignSelf: 'flex-end', width: 60, height: 60, bacgroundColor: '#ddd' }}
          >
            <FontAwesome 
              style={{ 
                color: '#fff',
                width: '100%',
              }}
              name={'bars'} 
              size={15} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: 'flex-start', width: 60, height: 60, bacgroundColor: '#ddd' }}
          >
            <FontAwesome 
              style={{ 
                color: '#fff',
                width: '100%',
              }}
              name={'sync-alt'} 
              size={15} />
        </TouchableOpacity>
      </View>


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
