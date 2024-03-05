import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import SignUpViewDoctor from "../src/View/DoctorView/doctorAuth/SignUpViewDoctor";
import SignInViewDoctor from "../src/View/DoctorView/doctorAuth/SignInViewDoctor";
import ProfileViewDoctor from "../src/View/DoctorView/doctorAuth/ProfileViewDoctor";
import ForgetPasswordViewDoctor from "../src/View/DoctorView/doctorAuth/ForgetPasswordViewDoctor";
import DiplomeValidation from "../src/View/DoctorView/doctorAuth/DiplomeValidation";
import ResetPasswordViewDoctor from "../src/View/DoctorView/doctorAuth/ResetPasswordViewDoctor";
const Stack = createStackNavigator();
function DoctorStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DoctorSignUp" component={SignUpViewDoctor} />
      <Stack.Screen name="DoctorSignIn" component={SignInViewDoctor} />
      <Stack.Screen name="DoctorProfile" component={ProfileViewDoctor} />
      <Stack.Screen name="DiplomeValidation" component={DiplomeValidation} />
      <Stack.Screen
        name="DoctorForgetPassword"
        component={ForgetPasswordViewDoctor}
      />
      <Stack.Screen
        name="DoctorResetPassword"
        component={ResetPasswordViewDoctor}
      />
    </Stack.Navigator>
  );
}

export default DoctorStack;
