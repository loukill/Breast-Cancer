import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStartView from "./src/View/HomeStartView/HomeStartView";
import DoctorStack from "./navApp/DoctorStack";
import PatientStack from "./navApp/PatientStack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeStart"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeStart" component={HomeStartView} />
        <Stack.Screen name="DoctorStack" component={DoctorStack} />
        <Stack.Screen name="PatientStack" component={PatientStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
