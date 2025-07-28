import React, {useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Alert, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import Button from '@/app/components/buttonBar';



const AuthScreen = () => {
    const router = useRouter();

    const login = async () => {
        router.push('/map')
    };
    const next = async () => {
        router.push('/map')
    }

    return (
        <View style={styles.buttonContainer}>
            <Button title='Continue' onPress={next} colour='#CEAE3E'/>
        </View>
    );

};

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 10,
        paddingBottom: '100%',
    }
});
export default AuthScreen;