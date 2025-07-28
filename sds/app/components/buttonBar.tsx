import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Fonts from 'expo-font'

const ButtonBar = ({ title='next', onPress, colour = '#c3c3c3' }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <View style={[styles.button, { backgroundColor: colour }]}>
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
//         flex: 1,
        width: '100%',
//         justifyContent: 'flex-end',
        alignItems: 'center',
        horizontally: 'center',
        paddingBottom: 6,
    },

    button: {
        width: '100%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 12,
    },

    buttonText: {
        fontFamily: 'nunito-black',
        fontSize: 20,
        color: '#ffffff',
    },
});

export default ButtonBar;