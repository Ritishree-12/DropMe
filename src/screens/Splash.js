import SplashScreen from 'react-native-splash-screen'
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <Image
          style={styles.image1}
          source={require("../../assets/tracking_logo.png")}
        />

        <Text style={styles.span1}>ezTruck</Text>
        <Text style={styles.text1}>
          Effortlessly book reliable mini trucks for all
        </Text>
        <Text style={styles.text1}>
          your logistic needs with our user-friendly app
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('Map')}
        >
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('Welcome')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    paddingBottom:10,
  },
  firstView: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  image1: {
    width: 220,
    height: 220,
  },
  span1: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
    padding: 20,
  },
  text1: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#f0f0f0",
    textAlign: "center",
  },
  
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: 'absolute',
    bottom:7, // Position the button container at the bottom
    left: 0,
    right: 0,
    // marginHorizontal:20,
    backgroundColor: 'transparent', // Set the background color to transparent
  },
  skipButton: {
    backgroundColor: "transparent",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    width: 100,
    // marginBottom: 10, // Add margin to the bottom to create the half inside effect
  },
  separator: {
    width: 20,
    height: 1,
    backgroundColor: "#fff",
  },
  nextButton: {
    backgroundColor: "transparent",
    borderRadius: 20,
    padding: 10,
    width: 100,
    borderColor: "#fff",
    borderWidth: 1,
    // marginBottom: 10, // Add margin to the bottom to create the half inside effect
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
