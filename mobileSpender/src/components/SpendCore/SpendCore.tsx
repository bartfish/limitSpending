/* eslint-disable react-native/no-inline-styles */
import React, { ReactElement, useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';

import ThemeContext from '../../contexts/ThemeContext';

import { TransactionModel } from '../../services/interfaces/TransactionModel';
import saveTransaction from '../../services/persist/Transactions/saveTransaction';
import validateTransaction from '../../services/persist/Transactions/validateTransaction';

export const SpendCoreView: React.FC<any> = (): ReactElement => {

    const { theme, setTheme } = useContext(ThemeContext);
    console.log(theme);
    console.log(setTheme);

    const [currentlySpent, setCurrentlySpent] = useState('');
    const { amount, type } = useSelector(state => state.limits);

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
        try {

            let transaction: TransactionModel = {
                id: 0,
                name: 'initial',
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

            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: '#fff' }}>Your current limit is {amount} { type }</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>
                    I spent
                </Text>

                <TextInput
                    underlineColorAndroid="transparent"
                    style={styles.input}
                    placeholder="0.00"
                    placeholderTextColor={'#ddd'}
                    keyboardType={'numeric'}
                    value={currentlySpent}
                    onChangeText={(amount) => onChangeTextInput(amount)}
                    onSubmitEditing = {() => addTransaction()}
                    returnKeyLabel="Done"
                    returnKeyType="done"
                />


                <Button
                    onPress={() => {
                        console.log('clicked');
                        setTheme('light');
                    }}
                    className="button-theme"
                >
                Toggle Theme
                </Button>
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




