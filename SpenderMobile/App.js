import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeContainer from './src/containers/HomeContainer';
import configureStore from './src/redux/store';

export default function App() {
  
  return (
    <Provider store={configureStore}>
      <View style={styles.container}>
        {/* <Text>Open up App.tsx on your app!</Text> */}
        <HomeContainer />
      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
