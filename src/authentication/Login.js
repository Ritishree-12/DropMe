import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Login With OTP</Text>
      <View style={styles.view1}>
        <TextInput
          style={styles.input}
          placeholder="Enter your Phone Number"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>LogIn</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.horizontalLine} />
          <Text style={styles.or}>or</Text>
          <View style={styles.horizontalLine} />
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.google}>Google</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.endDesc}>
            Don't have an account?{" "}
            <Text style={styles.termsHighlight} onPress={() => navigation.navigate("Registration")}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 5,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  check: {
    paddingHorizontal: 20,
    // fontSize: 13,
    color: "grey",
    paddingTop: 6,
  },
  termsHighlight: {
    color: "red", // Set the color to red for the highlighted text
    // fontSize: 12,
  },
  text1: {
    color: "red",
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 20,
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 12,
    borderRadius: 40,
    borderColor: "grey",
    color: "grey",
  },
  button: {
    height: 55,
    margin: 8,
    borderWidth: 1,
    padding: 12,
    borderRadius: 40,
    borderColor: "red",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff", // Default text color
    fontWeight: "400",
  },
  google: {
    height: 60,
    width: 140,
    margin: 20,
    borderWidth: 1,
    padding: 20,
    borderRadius: 40,
    color: "black",
    fontWeight: "800",
    textAlign: "center",
    alignSelf: "center",
    borderColor: "grey",
    
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
    color: "grey",
  },
  or: {
    fontSize: 18,
    color: "grey",
    padding: 10,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: "grey",
  },
  endDesc: {
    fontSize: 15,
    margin: 18,
    fontWeight: "bold",
    color: "grey",
    alignSelf: "center",
    textAlign: "center",
  },
});
