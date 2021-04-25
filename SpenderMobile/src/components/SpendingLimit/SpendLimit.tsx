/* eslint-disable react-native/no-inline-styles */
import React, { ReactElement, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler';
import { LimitModel } from '../../services/interfaces/LimitModel';
import validateLimit from '../../services/persist/Limits/validateLimit';
import saveLimit from '../../services/persist/Limits/saveLimit';
import { ANNUAL_LIMIT_NAME, DAILY_LIMIT_NAME, MONTHLY_LIMIT_NAME, WEEKLY_LIMIT_NAME } from '../../../utils/constants';

export const SpendLimitView: React.FC<any> = (): ReactElement => {

    const [limit, setLimit] = useState('');
    const [limitType, setLimitType] = useState(ANNUAL_LIMIT_NAME);

    useEffect(() => {
        // loadTransactionList(1);

    }, []);

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

    const saveTheLimit = () => {
        try {

            let newLimit: LimitModel = {
                name: 'initial',
                type: limitType,
                amount: parseFloat(limit),
                insertTime: new Date().getTime(),
                userId: 3 };

            const limitApproved = validateLimit(newLimit);

            if (limitApproved) {
                saveLimit(newLimit);
                setLimit('');
            }

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
                    <View style={styles.limitTypeContainer}>
                        <Picker style={{ color: '#fff' }} mode="dropdown" onValueChange={(e: string) => setLimitType(e)}>
                            <Picker.Item label="Annually" value={ANNUAL_LIMIT_NAME}/>
                            <Picker.Item label="Monthly" value={MONTHLY_LIMIT_NAME} />
                            <Picker.Item label="Weekly" value={WEEKLY_LIMIT_NAME} />
                            <Picker.Item label="Daily" value={DAILY_LIMIT_NAME} />
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
                        value={limit}
                        onChangeText={(amount) => onChangeTextInput(amount, setLimit)}
                        onSubmitEditing = {() => saveTheLimit()}
                        returnKeyLabel="Done"
                        returnKeyType="done"
                    />

                {/* </View> */}

                {/* <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Annually no more than: </Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        style={styles.input}
                        placeholder="0.00"
                        placeholderTextColor={'#ddd'}
                        keyboardType={'numeric'}
                        value={''}
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
                        value={''}
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
                        value={''}
                        editable={false}
                        // onChangeText={(amount) => onChangeTextInput(amount, setWeekLimit)}
                    />
                </View> */}
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




