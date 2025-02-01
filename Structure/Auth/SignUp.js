import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import ApiInstance from "../config/Apis/ApiInstance";
import Toast from "react-native-toast-message";

export default function SignUp() {
  const [model, setModel] = useState({});
  const navigation = useNavigation();

  const signup = async () => {
    await ApiInstance.post('/auth/signUp', model)
      .then((res) => {
        console.log(res, 'send');
        Toast.show({ type: 'success', position: 'top', text1: 'Success', text2: 'User is Successfully Created' });
        navigation.navigate('User');
      })
      .catch((err) => {
        console.log(err, 'error');
        Toast.show({ type: 'error', text1: 'Error', text2: 'Please Provide a Valid Email and Password', position: 'top' });
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.header}>Create Your Account</Text>
          <TextInput
            placeholder="User name"
            keyboardType="default"
            onChangeText={(e) => setModel({ ...model, name: e })}
            style={styles.input}
          />
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
          <TouchableOpacity style={styles.button} onPress={signup}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
          <View style={styles.accountContainer}>
            <Text style={styles.accountText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.linkText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    marginTop: '40%'
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
