import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import SignUpView from "../src/View/patientView/patientAuth/SignUpView";
import SignInView from "../src/View/patientView/patientAuth/SignInView";
import ProfileView from "../src/View/patientView/patientAuth/ProfileView";
import ForgetPasswordView from "../src/View/patientView/patientAuth/ForgetPasswordView";

const Stack = createStackNavigator();

function PatientStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PatientSignUp" component={SignUpView} />
      <Stack.Screen name="PatientSignIn" component={SignInView} />
      <Stack.Screen name="PatientProfile" component={ProfileView} />
      <Stack.Screen
        name="PatientForgetPassword"
        component={ForgetPasswordView}
      />
    </Stack.Navigator>
  );
}

export default PatientStack;
