/* eslint-disable react-native/no-inline-styles */
import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { TransactionModel } from '../../services/interfaces/TransactionModel';
import { loadTransactionList } from '../../services/persist/Transactions/loadTransactionList';
import saveTransaction from '../../services/persist/Transactions/saveTransaction';
import validateTransaction from '../../services/persist/Transactions/validateTransaction';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { InputText } from '../TextInputs/InputText';

interface SpendCoreViewProps {
    currentlySpent: number,
    setCurrentlySpent(n: number): number
}

export const SpendCoreView: React.FC<SpendCoreViewProps> = ({ setCurrentlySpent }): ReactElement => {

    const transactionList = useSelector(state => state.transactions);
    console.log(Object.keys(transactionList).length);
    console.log('transactionList');
    console.log(transactionList ? transactionList[3] : 0);

    // if (Object.keys(transactionList).length > 0) {
    //     transactionList.map((item, tx) => console.log(item + ": " + tx));
    // }


    const spentAmount = (value: number) => {
        setCurrentlySpent(value);
        console.log(value);

        try {

            let transaction: TransactionModel = {
                name: 'initial',
                amount: value,
                category: 1,
                latitude: 1,
                longtitude: 1,
                insertTime: new Date().getTime(),
                userId: 1 };

            const transactionApproved = validateTransaction(transaction);

            if (transactionApproved) {
                saveTransaction(transaction);
            }

          } catch (error) {
            // Error saving data
            console.error(error);
          }
    };

    const load = () => {
        loadTransactionList(1);
        console.log('transactionList');
        console.log(transactionList);
    };

    return (
        <View style={{ flex: 3, backgroundColor: 'skyblue' }}>

            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>
                    I spent
                </Text>

                <InputText
                    style={styles.input}
                    placeholder="0.00"
                    onChangeText={amount => spentAmount(amount)}
                    keyboardType="numeric"
                    underlineColorAndroid="rgba(0,0,0,0)" />
            </View>
            <ButtonPrimary action={() => console.log('')} text={'I did'} />
            <ButtonPrimary action={() => load()} text={'I did'} />
            {/* <View>
                {transactionList && transactionList.map((index: number, tx: TransactionModel) => (
                        <>
                        <li key={index}>{tx.name}</li>
                        <li key={index}>{tx.amount}</li>
                        <li key={index}>{tx.userId}</li>
                        </>
                    ))
                }
            </View> */}
        </View>
    );


};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#6E5BAA',
    },
    input: {
        minWidth: 250,
        textAlign: 'center',
        color: '#222',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        minHeight: 80,
        alignSelf: 'center',
        backgroundColor: 'transparent',
        fontSize: 45,
    },
    textTitle: {
        fontSize: 35,
        textAlign: 'center',
    }});




