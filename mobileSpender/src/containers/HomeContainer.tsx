/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { SpendCoreView } from '../components/SpendCore/SpendCore';
import ThemeContext from '../contexts/ThemeContext';

const HomeContainer: FunctionComponent<any> = () => {

  const { theme } = useContext(ThemeContext);

  return <>
    <View style={[styles.container, theme]}>
      {/* <View style={{ flexDirection:'row', justifyContent: 'space-between' }}>
        {/* <View>
            <TouchableOpacity
              style={{ bacgroundColor: '#ddd', ...padding(30, 30, 30, 30) }}
              >
                <FontAwesome
                  style={{
                    color: '#fff',
                  }}
                  name={'bars'}
                  size={15} />
            </TouchableOpacity>
        </View> */}

        {/* <View>
            <TouchableOpacity
              style={{ bacgroundColor: '#ddd', ...padding(30, 30, 30, 30) }}
              >
                <FontAwesome
                  style={{
                    color: '#fff',
                  }}
                  name={'sync-alt'}
                  size={15} />
            </TouchableOpacity>
          </View> */}
      {/* </View>  */}


    <View style={{ flex: 1 }}>
      {/* <View style={{ flex: 1 }} /> */}
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
