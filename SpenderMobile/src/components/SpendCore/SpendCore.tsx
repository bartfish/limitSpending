/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { TransactionModel } from '../../services/interfaces/TransactionModel';
import { loadTransactionList } from '../../services/persist/Transactions/loadTransactionList';
import saveTransaction from '../../services/persist/Transactions/saveTransaction';
import validateTransaction from '../../services/persist/Transactions/validateTransaction';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { InputText } from '../TextInputs/InputText';

interface SpendCoreViewProps {
    currentlySpent: null,
}

export const SpendCoreView: React.FC<SpendCoreViewProps> = (): ReactElement => {

    const [currentlySpent, setCurrentlySpent] = useState(0);

    const navigation = useNavigation();

    useEffect(() => {
        loadTransactionList(1);
    }, []);

    console.log(currentlySpent);

    const addTransaction = () => {
        try {

            let transaction: TransactionModel = {
                name: 'initial',
                amount: currentlySpent,
                category: 1,
                latitude: 1,
                longtitude: 1,
                insertTime: new Date().getTime(),
                userId: 1 };

            const transactionApproved = validateTransaction(transaction);

            if (transactionApproved) {
                saveTransaction(transaction);
                setCurrentlySpent(0);
            }

          } catch (error) {
            // Error saving data
            console.error(error);
          }
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
                    value={currentlySpent}
                    onChangeText={amount =>  setCurrentlySpent(amount) }
                    keyboardType="numeric"
                    underlineColorAndroid="rgba(0,0,0,0)" />
            </View>
            <ButtonPrimary action={() => addTransaction()} text={'Confirm spending'} />
            <ButtonPrimary action={() => navigation.navigate('TransactionHistory')} text={'Transactions history'} />
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



