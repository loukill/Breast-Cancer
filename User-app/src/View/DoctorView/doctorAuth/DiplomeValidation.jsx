import React, { useState, useEffect, useRef } from "react";
import { Button, Image, View, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import axios from "axios";

export default function DiplomeValidation({ route, navigation }) {
  const {
    email,
    fullName,
    phoneNumber,
    specialization,
    experience,
    password,
    confirmPassword,
  } = route.params;
  const [image, setImage] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null); // Create a ref for the camera

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePhoto = async () => {
    if (hasPermission && cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        console.log("Image captured. URI:", uri);
        setImage(uri);
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    } else {
      console.warn(
        "Camera permission not granted or camera ref not available."
      );
    }
  };

  const signUp = async () => {
    try {
      const response = await axios.post(
        "http://192.168.1.23:3000/authDoctor/signup",
        {
          email,
          fullName,
          phoneNumber,
          specialization,
          experience,
          password,
          confirmPassword,
          diplomeImage: image,
        }
      );

      console.log("Response:", response.data);
      navigation.navigate("DoctorStack", { screen: "DoctorProfile" });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log(image, "sqkdhglfjgdddjjù*hmdgmlù");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Camera
        style={{ width: 200, height: 200 }}
        type={Camera.Constants.Type.back}
        ref={cameraRef} // Assign the ref to the camera component
      />
      <Button title="Take a photo of your diplome" onPress={takePhoto} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Done" onPress={signUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
