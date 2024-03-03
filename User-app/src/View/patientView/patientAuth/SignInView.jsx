import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

function SignInView({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Perform validation here if needed

    // Make sign-in request to the backend
    axios
      .post("http://192.168.1.23:3000/authPatient/signin", {
        email,
        password,
      })
      .then((response) => {
        console.log("Signin successful:", response.data);
        navigation.navigate("PatientStack", { screen: "PatientProfile" });
      })
      .catch((error) => {
        console.error("Signin error:", error.response.data);
        // Handle signin error
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/images/PatientImage.png")}
        style={styles.imageContainer}
      />

      <Text style={styles.titleText}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signUpText}>
        Don't have an account?{" "}
        <Text
          onPress={() =>
            navigation.navigate("PatientStack", { screen: "PatientSignUp" })
          }
        >
          Sign Up
        </Text>
      </Text>

      <View style={styles.socialIconsContainer}>{/* Social icons */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,

    marginTop: 50,
  },
  input: {
    width: "80%",
    height: 40,
    marginTop: 20,
    paddingLeft: 10,
  },
  signUpText: {
    marginTop: 20,
  },
  socialIconsContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 15,
  },
  buttonContainer: {
    backgroundColor: "lightblue",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SignInView;
