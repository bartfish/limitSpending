import React, { FunctionComponent, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { ButtonPrimary } from '../components/Buttons/ButtonPrimary';
import ListItem from '../components/Lists/ListItem';
import { TransactionModel } from '../services/interfaces/TransactionModel';
import { loadTransactionList } from '../services/persist/Transactions/loadTransactionList';
import { clearTransactionsForUser } from '../services/storage/db';
import { setTransactionsList } from '../redux/actions/transactions';
import { useFocusEffect } from '@react-navigation/native';

const LimitBoxContainer: FunctionComponent<any> = () => {

  const transactionList = useSelector(state => state.transactions);
  console.log(transactionList);

  useFocusEffect(
    useCallback(() => {
      loadTransactionList(3);
    }, [])
  );

  const deleteAllTransactionsForUser = useCallback((userId: number) => {
    clearTransactionsForUser(userId);
    setTransactionsList([]);
  }, []);

  return <>
    <View style={[styles.container]}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />

        

        <View style={{ flex: 1, backgroundColor: 'setCurrentlySpent' }} />
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
