import React, { ReactElement } from "react";
import { AsyncStorage, Button, StyleSheet, Text, View } from "react-native";
import { ButtonPrimary } from "../Buttons/ButtonPrimary";
import { InputText } from "../TextInputs/InputText";

interface SpendCoreViewProps {
    currentlySpent: number,
    setCurrentlySpent(n: number): number
}

export const SpendCoreView: React.FC<SpendCoreViewProps> = ({ setCurrentlySpent }): ReactElement => {

    const spentAmount = (value: number) => {
        setCurrentlySpent(value)
        console.log(value)  

        try {
            
          } catch (error) {
            // Error saving data
          }
    }

    return (
        <View style={{ flex: 3, backgroundColor: 'skyblue' }}>

            <View style={styles.textContainer}> 
                <Text style={styles.textTitle}>
                    I spent
                </Text>

                <InputText
                    style={styles.input} 
                    placeholder="0.00"
                    onChangeText={amount => spentAmount(amount)}
                    keyboardType="numeric"
                    underlineColorAndroid='rgba(0,0,0,0)' />
            </View>
        
            <ButtonPrimary action={() => console.log("")} text={`I did`} />
    
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ddd"
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#6E5BAA'
    },
    input: {
        minWidth: 250,
        textAlign: "center",
        color: '#222',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        minHeight: 80, 
        alignSelf: 'center',
        backgroundColor: 'transparent',
        fontSize: 45
    },
    textTitle: {
        fontSize: 35,
        textAlign: "center",
    }

});



