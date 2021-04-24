/* eslint-disable react-native/no-inline-styles */
import React, { ReactElement, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TransactionModel } from '../../services/interfaces/TransactionModel';
import { loadTransactionList } from '../../services/persist/Transactions/loadTransactionList';
import saveTransaction from '../../services/persist/Transactions/saveTransaction';
import validateTransaction from '../../services/persist/Transactions/validateTransaction';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';

interface SpendCoreViewProps {
    currentlySpent: null,
}

export const SpendCoreView: React.FC<SpendCoreViewProps> = (): ReactElement => {

    const [currentlySpent, setCurrentlySpent] = useState('');

    useEffect(() => {
        loadTransactionList(1);
    }, []);

    const onChangeTextInput = (text) => {
        const numericRegex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/;
        if (numericRegex.test(text)) {
            setCurrentlySpent(text);
        } else {
            if (text === '') {
                setCurrentlySpent('');
            }
        }
    };

    const addTransaction = () => {

        console.log('creating transaction');
        try {

            let transaction: TransactionModel = {
                id: 0,
                name: 'initial',
                // eslint-disable-next-line radix
                amount: parseFloat(currentlySpent),
                category: 1,
                latitude: 1,
                longtitude: 1,
                insertTime: new Date().getTime(),
                userId: 3 };

            const transactionApproved = validateTransaction(transaction);

            if (transactionApproved) {
                saveTransaction(transaction);
                setCurrentlySpent('');
            }

          } catch (error) {
            // Error saving data
            console.error(error);
          }
    };

    return (
        <View style={{ flex: 3, backgroundColor: '#222' }}>

            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>
                    I spent
                </Text>

                <TextInput
                    underlineColorAndroid='transparent'
                    style={styles.input}
                    placeholder="0.00"
                    placeholderTextColor={'#ddd'}
                    keyboardType={'numeric'}
                    value={currentlySpent}
                    onChangeText={(amount) => onChangeTextInput(amount)}
                />

            </View>

            <View style={{ alignItems: 'center' }}>
                <ButtonPrimary action={() => addTransaction()} text={'Confirm spending'} />
            </View>

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
        backgroundColor: '#222',
    },
    input: {
        minWidth: 250,
        textAlign: 'center',
        color: '#fff',
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
        color: '#fff',
    },
    placeholder: {
        color: '#ddd',
    },
});




