import React, {useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Alert, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import Button from '@/app/components/buttonBar';

const targetSetScreen = () => {
    const [height, setHeight] = useState(0);
    const [period, setPeriod] = useState(0);
    const [windDirection, setDirection] = useState('');
    const [windSpeed, setWindSpeed] =useState(0);
};