import React, { ReactElement } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { padding } from '../../styles';

interface ButtonProps {
    action(): void,
    text: string
}

export const ButtonPrimary: React.FC<ButtonProps> = ({ action, text }): ReactElement => {
    return <>
        <TouchableOpacity
            onPress={() => action()}
            title={text}
            style={styles.buttonOverall}>
                <Text style={styles.buttonLabel}>{text}</Text>
        </TouchableOpacity>
    </>;
};

const styles = StyleSheet.create({
    buttonOverall: {
      textAlign: 'center',
      textTransform: 'uppercase',
      ...padding(20, 0, 20, 0),
      maxWidth: 200,
    },
    buttonLabel: {
        color: '#ddd',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
    },
  });
