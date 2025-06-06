import { Text, View, Button } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View>
      <Text>This is the launch page</Text>
      <Text>Welcome to UNIMART!</Text>
      <Button title="Sign Up" onPress={() => router.navigate("/signup")} />
      <Button title="Login" onPress={() => router.navigate("/home")} />
      <Button title="Go to Home Page" onPress={() => router.navigate("/home")} />

    </View>
  );
}
