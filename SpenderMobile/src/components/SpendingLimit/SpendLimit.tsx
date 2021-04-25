/* eslint-disable react-native/no-inline-styles */
import React, { ReactElement, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler';

export const SpendLimitView: React.FC<any> = (): ReactElement => {

    const [annualLimit, setAnnualLimit] = useState('');
    const [monthLimit, setMonthLimit] = useState('');
    const [weekLimit, setWeekLimit] = useState('');

    useEffect(() => {
        // loadTransactionList(1);

    }, [annualLimit, monthLimit, weekLimit]);

    const onChangeTextInput = (text, action) => {
        const numericRegex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/;
        if (numericRegex.test(text)) {
            action(text);
        } else {
            if (text === '') {
                action('');
            }
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
                    <View style={styles.limitTypeContainer}>
                        <Picker style={{ color: '#fff' }} mode="dropdown">
                            <Picker.Item label="Annually" value="annually"/>
                            <Picker.Item label="Monthly" value="monthly"/>
                            <Picker.Item label="Weekly" value="weekly"/>
                        </Picker>
                    </View>

                    <View style={styles.limitInput}>
                        <Text style={{ color: '#fff' }}>no more than</Text>
                    </View>
                </View>
                <TextInput
                        underlineColorAndroid="transparent"
                        style={styles.input}
                        placeholder="0.00"
                        placeholderTextColor={'#ddd'}
                        keyboardType={'numeric'}
                        value={annualLimit}
                        onChangeText={(amount) => onChangeTextInput(amount, setAnnualLimit)}
                    />

                {/* </View> */}

                <View style={styles.inputContainer}>
                    {/* <Text style={styles.inputLabel}>Annually no more than: </Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        style={styles.input}
                        placeholder="0.00"
                        placeholderTextColor={'#ddd'}
                        keyboardType={'numeric'}
                        value={annualLimit}
                        editable={false}
                        // onChangeText={(amount) => onChangeTextInput(amount, setAnnualLimit)}
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
                        value={monthLimit}
                        editable={false}
                        // onChangeText={(amount) => onChangeTextInput(amount, setMonthLimit)}
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
                        value={weekLimit}
                        editable={false}
                        // onChangeText={(amount) => onChangeTextInput(amount, setWeekLimit)}
                    /> */}
                </View>
                <View style={styles.futureContainer} />
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
        flex: 2,
        flexDirection: 'row',
        color: '#fff',
        fontSize: 16,
    },
    futureContainer: {
        flex: 1,
    },
    limitTypeContainer: {
        flex: 0.5,
        alignSelf: 'center',

    },
    limitInput: {
        alignSelf: 'center',
        flex: 0.5,
    },
    inputLabel: {
        color: '#fff',
        fontSize: 16,
    },
    input: {
        color: '#fff',
        backgroundColor: 'transparent',
        fontSize: 40,
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




