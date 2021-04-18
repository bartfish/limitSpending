/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { TransactionModel } from '../services/interfaces/TransactionModel';
import { loadTransactionList } from '../services/persist/Transactions/loadTransactionList';

interface IHomeProps {
    user: null,
}

const TransactionHistoryComponent: FunctionComponent<{ initial?: IHomeProps }> = ({ initial = null }) => {

  const transactionList = useSelector(state => state.transactions);

  useEffect(() => {
      loadTransactionList(1);
  }, []);

  return <>
    <View style={[styles.container]}>

    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
    <View>
        {transactionList ? transactionList.map((tx: TransactionModel) => (
                <>
                    <Text>{tx.name} : {tx.amount} : {tx.userId} : {tx.insertTime}</Text>
                </>
            )) : null
        }
        </View>
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

export default TransactionHistoryComponent;