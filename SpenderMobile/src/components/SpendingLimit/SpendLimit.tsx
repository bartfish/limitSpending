/* eslint-disable react-native/no-inline-styles */
import React, { ReactElement, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export const SpendLimitView: React.FC<any> = (): ReactElement => {

    const [currentlySpent, setCurrentlySpent] = useState('');

    useEffect(() => {
        // loadTransactionList(1);
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


          } catch (error) {
            // Error saving data
            console.error(error);
          }
    };

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.textTitle}>
                    Set your limitations
                </Text>
            </View>

            <View style={styles.formContainer}>
                <View style={styles.currentContainer}>

                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Annually no more than: </Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        style={styles.input}
                        placeholder="0.00"
                        placeholderTextColor={'#ddd'}
                        keyboardType={'numeric'}
                        value={currentlySpent}
                        onChangeText={(amount) => onChangeTextInput(amount)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Monthly no more than: </Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        style={styles.input}
                        placeholder="0.00"
                        placeholderTextColor={'#ddd'}
                        keyboardType={'numeric'}
                        value={currentlySpent}
                        onChangeText={(amount) => onChangeTextInput(amount)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Weekly no more than: </Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        style={styles.input}
                        placeholder="0.00"
                        placeholderTextColor={'#ddd'}
                        keyboardType={'numeric'}
                        value={currentlySpent}
                        onChangeText={(amount) => onChangeTextInput(amount)}
                    />
                </View>
                <View style={styles.futureContainer}>

                </View>
            </View>



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        flex: 2,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#222',
        color: '#fff',
    },
    currentContainer: {
        flex: 1,
    },
    futureContainer: {
        flex: 2,
    },
    inputLabel: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
    },
    input: {
        color: '#fff',
        backgroundColor: 'transparent',
        fontSize: 25,
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




