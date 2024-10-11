import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Login } from "../screens/Login/Login";
import { Quiz } from "../screens/Quiz";
import { Finish } from "../screens/Finish";
import { History } from "../screens/History";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Login" // Set Login as the initial route
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="home" component={Home} />

      <Group screenOptions={{ gestureEnabled: false }}>
        <Screen name="quiz" component={Quiz} />
        <Screen name="finish" component={Finish} />
      </Group>

      <Screen name="history" component={History} />
    </Navigator>
  );
}
