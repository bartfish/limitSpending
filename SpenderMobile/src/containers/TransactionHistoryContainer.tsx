/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
    <ScrollView>
        {transactionList ? transactionList.map((tx: TransactionModel) => (
                <>
                    <Text>{tx.name} : {tx.amount} : {tx.userId} : {tx.insertTime}</Text>
                </>
            )) : null
        }
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

export default TransactionHistoryComponent;
