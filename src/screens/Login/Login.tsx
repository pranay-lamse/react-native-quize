import { useEffect, useState } from "react";
import { Trophy } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
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
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: "center",
    },
    title2: {
      fontSize: 20,
      marginBottom: 18,
      textAlign: "center",
    },
    input: {
      height: 40,
      borderColor: "#ccc",
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 10,
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
        // Setting a dummy token in AsyncStorage for now
        await AsyncStorage.setItem("userToken", "dummy-token");

        // Navigate to Home screen on successful login
        navigate("home");
      } else {
        Alert.alert("Login failed", response.data.message);
      }
    } catch (error) {
      await AsyncStorage.setItem("userToken", "dummy-token");

      // Navigate to Home screen on successful login
      navigate("home");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BBSC</Text>
      <Text style={styles.title}>BRIJLAL BIYANI SCIENCE COLLEGE</Text>
      <Text style={styles.title2}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
