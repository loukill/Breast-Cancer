import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';


// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
          <Image
            source={require('../assets/images/signup.png')} // Replace with your illustration image path
            style={styles.illustration}
          />
          <Text style={styles.headerText}>Sign up</Text>
    
          <View style={styles.socialButtonsContainer}>
            {/* Social Icons can be from react-native-vector-icons or images */}
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/icons/google.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/icons/facebook.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/icons/apple.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
    
          <Text style={styles.orText}>Or, Register with an Email</Text>
          <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#27B4EF" style={styles.icon} />
          <TextInput
            placeholder="Email ID"
            style={styles.input}
            keyboardType="email-address"
          />
          </View>
          <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#27B4EF" style={styles.icon} />
          <TextInput
            placeholder="Full Name"
            style={styles.input}
          />
          </View>
          <View style={styles.inputContainer} >
          <Ionicons name="call-outline" size={20} color="#27B4EF" style={styles.icon} />
          <TextInput
            placeholder="Phone Number"
            style={styles.input}
            keyboardType="phone-pad"
          />
          </View>
          <View style={styles.inputContainer} >
          <Ionicons name="lock-closed-outline" size={20} color="#27B4EF" style={styles.icon} />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
          </View>
          <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#27B4EF" style={styles.icon} />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={styles.input}
          />
    </View>

          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupButtonText}>Signup</Text>
          </TouchableOpacity>
    
          <View style={styles.loginContainer}>
            <Text style={styles.alreadyMemberText}>Already Signed up?</Text>
            <TouchableOpacity>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
      );
    };
    
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
      socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginBottom: 20,
      },
      socialButton: {
        // Styles for your social buttons
      },
      socialIcon: {
        width: 30, // Adjust as needed
        height: 30, // Adjust as needed
      },
      orText: {
        marginBottom: 20,
      },
      input: {
        width: '80%',
        padding: 15,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
      },
      signupButton: {
        backgroundColor: '#007bff', // Your desired button color
        width: '80%',
        padding: 15,
        borderRadius: 25,
        marginBottom: 20,
        marginTop: 20,
      },
      signupButtonText: {
        textAlign: 'center',
        color: '#ffffff', // Your desired button text color
        fontWeight: 'bold',
      },
      loginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
      },
      alreadyMemberText: {
        marginRight: 5,
      },
      loginText: {
        color: '#0000ff', // Your desired color for login text
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        marginRight: 10,
      },
    });
    
