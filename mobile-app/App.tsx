import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeContainer from './src/containers/HomeContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx on your app!</Text>
      <StatusBar style="auto" />
      <HomeContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
