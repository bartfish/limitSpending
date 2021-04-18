import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonPrimary } from '../components/Buttons/ButtonPrimary';
import { SpendCoreView } from '../components/SpendCore/SpendCore';
import { InputText } from '../components/TextInputs/InputText';

interface IHomeProps {
    user: null,
}

const HomeContainer: FunctionComponent<{ initial?: IHomeProps }> = ({ initial = null }) => {
    
  const [currentlySpent, setCurrentlySpent] = useState(0);

  return <>
    <View style={[styles.container]}>

    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
      <SpendCoreView setCurrentlySpent={setCurrentlySpent} />
      <View style={{ flex: 1, backgroundColor: 'setCurrentlySpent' }} />
    </View>
      

    </View>
    
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default HomeContainer;