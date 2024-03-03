import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import HomeImage from "../../../../../assets/HomeImage.png";

function HomeStartView({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/HomeImage.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.container}>
        <Text>If you are patient continue here</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("PatientStack", { screen: "PatientSignIn" })
          }
        >
          <Text>Continue as Patient</Text>
        </TouchableOpacity>
        <Text>If you are Doctor continue here</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("DoctorStack", { screen: "DoctorSignIn" })
          }
        >
          <Text>Continue as a Doctor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },

  button: {
    backgroundColor: "lightblue",
    paddingVertical: 15,
    paddingHorizontal: 75,
    borderRadius: 20,
    marginBottom: 10,
    width: 300,
  },
  buttonText: {
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
});

export default HomeStartView;
