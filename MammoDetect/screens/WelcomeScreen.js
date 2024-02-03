import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require("../assets/images/logo.png")}
                style={styles.logo}
            />
            <Text style={styles.title}>
                If you are a patient continue here:
            </Text>
            <TouchableOpacity
                style={styles.buttonPatient}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>
                    Continue as a patient
                </Text>
            </TouchableOpacity>
            <Text style={styles.subtitle}>
                If you are a doctor you can continue here:
            </Text>
            <TouchableOpacity
                style={styles.buttonDoctor}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonTextDoctor}>
                    Continue as a doctor
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: '#fff', // Replace with your background color
    },
    logo: {
        width: 400, // Adjust as per your image's aspect ratio
        height: 400, // Adjust as per your image's aspect ratio
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4b5563', // This is Tailwind's gray-700
        textAlign: 'center',
    },
    buttonPatient: {
        backgroundColor: '#27B4EF', // This is Tailwind's yellow-400
        padding: 15,
        borderRadius: 25,
        marginHorizontal: 50,
    },
    buttonDoctor: {
        backgroundColor: 'transparent',
        padding: 15,
        borderRadius: 25,
        marginHorizontal: 50,
        borderWidth: 1,
        borderColor: '#27B4EF', // Border color as per your theme
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF', // This is Tailwind's gray-700
        textAlign: 'center',
    },
    buttonTextDoctor: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#27B4EF', // This is Tailwind's gray-700
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#4b5563', // Your choice for subtitle text color
        fontWeight: '600',
        textAlign: 'center',
    },
});
