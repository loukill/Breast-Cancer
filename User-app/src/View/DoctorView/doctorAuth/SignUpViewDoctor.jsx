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
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

function SignUpViewDoctor({ navigation }) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/images/DoctorImage.png")}
        style={styles.imageContainer}
      />

      <Text style={styles.titleText}>Sign Up</Text>
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

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="FullName"
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
      />
      <Picker
        style={{ width: "80%", marginTop: 15 }}
        selectedValue={specialization}
        onValueChange={(itemValue, itemIndex) => setSpecialization(itemValue)}
      >
        <Picker.Item label="Specialization" value="" />
        <Picker.Item label="Psycologist" value="Psycologist" />
        <Picker.Item label="Nerologiste " value="Nerologiste" />
        <Picker.Item label="Generaliste" value="Generaliste" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Experience"
        onChangeText={setExperience}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() =>
          navigation.navigate("DoctorStack", {
            screen: "DiplomeValidation",
            params: {
              email,
              fullName,
              phoneNumber,
              specialization,
              experience,
              password,
              confirmPassword,
            },
          })
        }
      >
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>

      <Text style={styles.signUpText}>
        If you have an account ?{" "}
        <Text
          onPress={() =>
            navigation.navigate("DoctorStack", { screen: "DoctorSignIn" })
          }
        >
          Sign In
        </Text>
      </Text>
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
    height: 180,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,

    marginTop: 30,
  },
  input: {
    width: "80%",
    height: 40,
    marginTop: 15,
    paddingLeft: 10,
  },
  signUpText: {
    marginTop: 20,
  },
  socialIconsContainer: {
    flexDirection: "row",
    marginTop: 20,
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

export default SignUpViewDoctor;
