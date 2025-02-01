import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import ApiInstance from "../config/Apis/ApiInstance";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [model, setModel] = useState({});
  const navigation = useNavigation();

  const login = async () => {
    await ApiInstance.post("/auth/Login", model)
      .then((res) => {
        const { role } = res.data;

        if (role === "admin") {
          Toast.show({
            type: "success",
            position: "top",
            text1: "Admin Login",
            text2: "Welcome Admin!",
          });
          navigation.navigate("Admin");
        } else if (role === "user") {
          Toast.show({
            type: "success",
            position: "top",
            text1: "User Login",
            text2: "Welcome User!",
          });
          navigation.navigate("User");
        }
      })
      .catch((err) => {
        console.log(err, "error");
        Toast.show({
          type: "error",
          position: "top",
          text1: "Error",
          text2: "Please provide a valid email and password",
        });
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Login to Your Account</Text>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(e) => setModel({ ...model, email: e })}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          keyboardType="default"
          onChangeText={(e) => setModel({ ...model, password: e })}
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.accountContainer}>
          <Text style={styles.accountText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.linkText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
    width: "85%",
    maxWidth: 400,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#003C43",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    marginVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#003C43",
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    color: "#333333",
  },
  button: {
    backgroundColor: "#003C43",
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  accountContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  accountText: {
    fontSize: 16,
    color: "#666666",
  },
  linkText: {
    fontSize: 16,
    color: "#003C43",
    fontWeight: "600",
    marginHorizontal: 5,
  },
});
