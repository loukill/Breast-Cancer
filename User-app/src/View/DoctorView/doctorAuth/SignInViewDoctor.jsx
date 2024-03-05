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

function SignInViewDoctor({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("http://192.168.1.23:3000/authDoctor/signin", { email, password })
      .then((response) => {
        // Handle successful login, maybe store token or navigate to another screen
        console.log("Login successful", response.data);
        navigation.navigate("DoctorStack", { screen: "DoctorProfile" });
      })
      .catch((error) => {
        // Handle error, maybe show an error message to the user
        console.error("Login error", error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/images/DoctorImage.png")}
        style={styles.imageContainer}
      />

      <Text style={styles.titleText}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signUpText}>
        Don't have an account?{" "}
        <Text
          onPress={() =>
            navigation.navigate("DoctorStack", { screen: "DoctorSignUp" })
          }
        >
          Sign Up
        </Text>
      </Text>
      <Text
        onPress={() =>
          navigation.navigate("DoctorStack", { screen: "DoctorForgetPassword" })
        }
      >
        Forget Password
      </Text>

      <View style={styles.socialIconsContainer}>
        <Image
          source={require("../../../../assets/images/GooGleImage.png")}
          style={styles.socialIcon}
        />
        <Image
          source={require("../../../../assets/images/FacebookImage.png")}
          style={styles.socialIcon}
        />
        <Image
          source={require("../../../../assets/images/AppleImage.png")}
          style={styles.socialIcon}
        />
      </View>
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

export default SignInViewDoctor;
