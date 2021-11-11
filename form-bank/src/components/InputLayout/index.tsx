import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
    nameInput: string,
    setOperation: any,
}

export default function InputLayout({ nameInput, setOperation }: Props) {
    return (
        <View style={styles.inputContainer}>
            <Text>{nameInput}</Text>
            <View style={styles.textInput}>
                <TextInput
                    style={styles.text}
                    onChangeText={(value) => { setOperation(value) }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    inputContainer: {
        flexDirection: 'row',
        margin: 20,
        alignItems: 'center',
    },
    textInput: {
        width: '100%',
        height: 50,
        backgroundColor: '#f0f0f0',
        marginHorizontal: 10,
        borderRadius: 25,
        padding: 10,
    },
    text: {
        width: 200,
    }
})