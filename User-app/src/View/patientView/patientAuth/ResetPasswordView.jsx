import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

function ResetPasswordView({ route, navigation }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { email } = route.params;
  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.1.23:3000/authPatient/resetPassword",
        {
          email, // Use the email obtained from navigation params
          newPassword: newPassword,
          // confirmPassword: confirmPassword,
        }
      );

      if (response.status === 200) {
        Alert.alert("Success", response.data.message);
        navigation.navigate("PatientStack", {
          screen: "PatientSignIn",
        });
      } else {
        Alert.alert("Error", response.data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Reset Password</Text>
      <TextInput
        placeholder="Enter your new password"
        value={newPassword}
        onChangeText={setNewPassword}
        // keyboardType="password"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="confirm your new password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        // keyboardType="password"
        autoCapitalize="none"
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        title="Reset Password"
        onPress={handleResetPassword}
      >
        <Text style={styles.buttonText}>Set new Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10, // Apply border radius to input
  },
  button: {
    backgroundColor: "lightblue",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
    width: 200,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    // fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
  },
});

export default ResetPasswordView;
