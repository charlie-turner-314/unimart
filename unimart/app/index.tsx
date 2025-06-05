import { Text, View, Button } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the home page</Text>
      <Button onPress={() => router.navigate("/home")}>Go To Listing Page</Button>
    </View>
  );
}
