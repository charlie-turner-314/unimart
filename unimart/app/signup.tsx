import { Text, View, Button } from "react-native";
import { router } from "expo-router";
import { TextInput } from "react-native-gesture-handler";

export default function Index() {
  return (
    <View>
        <Text>This is the sign up page</Text>
        <TextInput placeholder="Enter your email" style={{ borderWidth: 1, padding: 10, margin: 10 }} />
        <TextInput placeholder="Enter your password" secureTextEntry style={{ borderWidth: 1, padding: 10, margin: 10 }} />
        <TextInput placeholder="Confirm your password" secureTextEntry style={{ borderWidth: 1, padding: 10, margin: 10 }} />
        <Button title="Sign Up" onPress={() => router.navigate("/home")} />
        <Button title="Already have an account? Log In" onPress={() => router.navigate("/login")} />
    </View>
  );
}