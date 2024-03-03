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
import DateTimePicker from "@react-native-community/datetimepicker";

function SignUpView({ navigation }) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSignUp = () => {
    // Perform validation here if needed

    // Make signup request to the backend
    axios
      .post("http://192.168.1.23:3000/authPatient/signup", {
        email,
        fullName,
        phoneNumber,
        birthdate,
        password,
        confirmPassword,
      })
      .then((response) => {
        console.log("Signup successful:", response.data);
        navigation.navigate("PatientStack", { screen: "PatientProfile" });
      })
      .catch((error) => {
        console.error("Signup error:", error.response.data);
        // Handle signup error
      });
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setShowDatePicker(false);
    setBirthdate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/images/PatientImage.png")}
        style={styles.imageContainer}
      />

      <Text style={styles.titleText}>Sign Up</Text>
      <View style={styles.socialIconsContainer}>{/* Social icons */}</View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowDatePicker(true)}
      >
        <Text>{birthdate.toISOString().split("T")[0]}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={birthdate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
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
        value={confirmPassword}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>

      <Text style={styles.signUpText}>
        If you have an account ?{" "}
        <Text
          onPress={() =>
            navigation.navigate("PatientStack", { screen: "PatientSignIn" })
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
    height: 300,
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
export default SignUpView;
