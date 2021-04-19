import React, { ReactElement } from "react";
import { Button, StyleSheet, Text } from "react-native";

interface ButtonProps {
    action(): void,
    text: string
}

export const ButtonPrimary: React.FC<ButtonProps> = ({ action, text }): ReactElement => {

    console.log(text);

    return <>
        <Button
            onPress={() => action()}
            title={text}
            style={styles.container}
            accessibilityLabel="Learn" />
    </>;

};

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ddd"
    },
  });