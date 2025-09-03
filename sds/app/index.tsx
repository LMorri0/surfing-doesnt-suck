import React, {useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Alert, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Button from '@/app/components/buttonBar';
import TextField from '@/app/components/TextField'

const AuthScreen = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const login = async () => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/map');
        } catch (error: unknown) {
            if (Error) {
                Alert.alert('Cannot find account', 'Try again');
            }
        } finally {
            setLoading(false);
        }
    };
    const next = async () => {
        router.push('/map')
    }

    const SignUp = async () => {
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push('/map');
        } catch (error: unknown) {
            if (Error) {
                Alert.alert('Cannot create account', 'Try again');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.select({ ios: 'padding', android: undefined })}
            style={styles.root}
        >
            <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
                <View style={styles.inputContainer}>
                    <TextField
                        label="Please Enter Email Address"
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.textInput}/>


                    <TextField
                        label="Enter your Password"
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCapitalize='none'
                        style={styles.textInput}/>
                </View>


                {loading ? (
                    <ActivityIndicator size="large" color="#CEAE3E" style={styles.spinner} />
                ) : (
                    <View style={styles.buttonContainer}>
                        <Button title="Login" onPress={login} colour="#CEAE3E" />
                        <Button title="Sign Up" onPress={SignUp} colour="#CEAE3E" />
                    </View>
                )}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scroll: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 24,
    },
    inputContainer: {
        width: '100%',
    },
    field: {
        marginBottom: 14,
    },
    label: {
        fontSize: 14,
        marginBottom: 6,
        color: '#1F2937',
        opacity: 0.9,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#D1D5DB',
        padding: 12,
        borderRadius: 10,
        fontSize: 16,
    },
    textInput: {
        width: '100%',
        borderWidth: 1,
        padding: 12,
        marginBottom: 12,
        borderRadius: 8,
    },
    spinner: {
        marginTop: 16,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 12,
        gap: 10,
    },
});


export default AuthScreen;