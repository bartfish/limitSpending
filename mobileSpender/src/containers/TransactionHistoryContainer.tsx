/* eslint-disable react-native/no-inline-styles */
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

const TransactionHistoryContainer: FunctionComponent<any> = () => {

  const transactionList = useSelector(state => state.transactions);

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
          <ScrollView>
              {(transactionList && transactionList.transactions !== null) ? transactionList.map((tx: TransactionModel) => (
                      <>
                        <ListItem key={tx.id} name={tx.name} amount={tx.amount} time={tx.insertTime} id={tx.id} />
                      </>
                  )) : <Text style={{ textAlign: 'center' }}>No spendings found.</Text>
              }

              <ButtonPrimary
                  action={() => deleteAllTransactionsForUser(3)}
                  text={'Clear local storage'} />

          </ScrollView>

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

export default TransactionHistoryContainer;
