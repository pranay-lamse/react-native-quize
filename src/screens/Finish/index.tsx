import { Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Stars } from "../../components/Stars";

import { styles } from "./styles";

interface Params {
  total: string;
  points: string;
}

export function Finish() {
  const route = useRoute();
  const { points, total } = route.params as Params;

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Stars />

      <View style={styles.message}>
        <Text style={styles.title}>Congratulations!</Text>

        <Text style={styles.subtitle}>
          You got {points} out of {total} questions right
        </Text>
      </View>

      <Button title="Go to home" onPress={() => navigate("home")} />
    </View>
  );
}
