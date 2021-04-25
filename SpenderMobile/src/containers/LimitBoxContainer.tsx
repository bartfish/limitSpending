/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { loadTransactionList } from '../services/persist/Transactions/loadTransactionList';
import { useFocusEffect } from '@react-navigation/native';
import { SpendLimitView } from '../components/SpendingLimit/SpendLimit';

const LimitBoxContainer: FunctionComponent<any> = () => {

  const transactionList = useSelector(state => state.transactions);
  console.log(transactionList);

  useFocusEffect(
    useCallback(() => {
      loadTransactionList(3);
    }, [])
  );

  return <>
    <View style={[styles.container]}>
      <View style={{ flex: 1, backgroundColor: '#222' }}>
        
        <SpendLimitView />

      </View>
    </View>

  </>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LimitBoxContainer;
