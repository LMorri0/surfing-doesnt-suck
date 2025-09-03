import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

interface CustomTextInputProps {
    label?: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const TextField = ({ label, placeholder, value, onChangeText, secureTextEntry }: CustomTextInputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[styles.input, isFocused && styles.inputFocused]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                autoCapitalize="none"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        width: '100%',
    },

    label: {
        fontSize: 16,
        color: '#191919',
        marginBottom: 10,
        paddingHorizontal: 12,
        fontFamily: 'nunito-black',
    },

    input: {
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        fontFamily: 'nunito-semibold',
        backgroundColor: '#F0F1F3',
    },

    inputFocused: {
        backgroundColor: '#E0E4E7',
    },
});

export default TextField;