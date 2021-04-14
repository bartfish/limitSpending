import React, { ReactElement } from "react";
import { Button, Text } from "react-native";

interface ButtonProps {
    action(): void,
    text: string
}

export const ButtonPrimary: React.FC<ButtonProps> = ({ action, text }): ReactElement => {

    console.log(text)

    return <>
        <Button
            onPress={() => action()}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button" />
        {/* <Text>{clicks}</Text> */}
        <Text>{text}</Text>
    </>


}