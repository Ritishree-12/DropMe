import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Registration = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Register New User</Text>
      <View style={styles.view1}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Your mobile Number"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput style={styles.input} placeholder="Date Of Birth" />
        <Text style={styles.check}>
          By signing up, you agree to the{" "}
          <Text style={styles.termsHighlight}>Terms of Service</Text> and{" "}
          <Text style={styles.termsHighlight}>Privacy policy.</Text>
        </Text>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => console.log("Sign Up pressed")}
        >
          <Text style={styles.signupText}>Sign Up</Text>
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
          <Text style={styles.endText}>
            Already have an account?{" "}
            <Text style={styles.termsHighlight} onPress={() => navigation.navigate("Login")}>Sign in</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 5,
    backgroundColor: "#fff",
    // paddingTop: 20,
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
    margin: 8,
    borderWidth: 1,
    padding: 12,
    borderRadius: 40,
    borderColor: "grey",
    color: "grey",
  },
  signupButton: {
    height: 60,
    margin: 12,
    borderRadius: 40,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    color: "#fff",
    fontSize: 18,
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
  endText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
    alignSelf: "center",
    textAlign: "center",
  },
});
