import React, { ReactElement } from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";


export const InputText: React.FC = (props): ReactElement => {

    return <>
        <TextInput 
            {...props}
            editable
            maxLength={100}
        />
    </>

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ddd"
    },
  });