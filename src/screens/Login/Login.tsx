import { useEffect, useState } from "react";
import { Trophy } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Login() {
  const [quizzes, setQuizzes] = useState("");
  const [levels, setLevels] = useState([1, 2, 3]);

  const { navigate } = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
      backgroundColor: "#121212", // Dark background
    },
    title: {
      fontSize: 26,
      color: "#FFFFFF", // White text
      fontWeight: "bold",
      marginBottom: 15,
      textAlign: "center",
    },
    subtitle: {
      fontSize: 18,
      color: "#BBBBBB", // Light grey text
      marginBottom: 25,
      textAlign: "center",
    },
    input: {
      height: 45,
      backgroundColor: "#1F1F1F", // Darker input background
      color: "#FFFFFF", // White input text
      borderColor: "#333333", // Dark border
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      marginBottom: 15,
    },
    button: {
      backgroundColor: "#6200EE", // Accent color for button
      paddingVertical: 12,
      borderRadius: 8,
      marginTop: 10,
      alignItems: "center",
    },
    buttonText: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

  const handleLogin = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.post("https://yourapi.com/login", {
        username,
        password,
      });

      if (response.data.status === "success") {
        await AsyncStorage.setItem("userToken", "dummy-token");
        navigate("home");
      } else {
        Alert.alert("Login failed", response.data.message);
      }
    } catch (error) {
      await AsyncStorage.setItem("userToken", "dummy-token");
      navigate("home");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BBSC</Text>
      <Text style={styles.subtitle}>BRIJLAL BIYANI SCIENCE COLLEGE</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#AAAAAA"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#AAAAAA"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
