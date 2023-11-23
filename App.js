import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./src/screens/Splash";
import Welcome from "./src/authentication/Welcome";
import MapScreen from "./src/screens/MapScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Registration from "./src/authentication/Registration";
import Login from "./src/authentication/Login";
import ChooseVehicle from "./src/screens/ChooseVehicle";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Splash" component={Splash} options={{
          title: '',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChooseVehicle" component={ChooseVehicle} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

