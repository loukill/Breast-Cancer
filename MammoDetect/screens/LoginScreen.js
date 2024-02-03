import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/login.png')}
        style={styles.illustration}
      />
      <Text style={styles.headerText}>Login</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#27B4EF" style={styles.icon} />
        <TextInput
          placeholder="Email ID"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#27B4EF" style={styles.icon} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={() => {/* handle forgot password */ }}>
      <Text style={[styles.forgotPassword, { textAlign: 'right' }]}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or, login with</Text>

      <View style={styles.socialLoginContainer}>
        <Image source={require('../assets/icons/google.png')} style={styles.socialIcon} />
        <Image source={require('../assets/icons/facebook.png')} style={styles.socialIcon} />
        <Image source={require('../assets/icons/apple.png')} style={styles.socialIcon} />
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>New to this platform?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
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
  illustration: {
    width: '100%', // Adjust as needed
    height: 200, // Adjust as needed
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#27B4EF',
  },
  forgotPassword: {
    //alignSelf: 'flex-end',
    marginRight: '10%',
    marginBottom: 20,
    color: '#0000ff', // Your desired color
  },
  loginButton: {
    backgroundColor: '#007bff', // Your desired button color
    width: '80%',
    padding: 15,
    borderRadius: 25,
    marginBottom: 20,
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#ffffff', // Your desired button text color
    fontWeight: 'bold',
  },
  orText: {
    marginBottom: 20,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
  socialIcon: {
    width: 40, // Adjust as needed
    height: 40, // Adjust as needed
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerText: {
    marginRight: 5,
  },
  registerButtonText: {
    color: '#0000ff', // Your desired color for register button text
  },
  icon: {
    marginRight: 10,
  },
});
