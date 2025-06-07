import { Text, View, Button } from "react-native";
import { router } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./home";
import AccountPage from "./account";
import SellPage from "./createlisting";

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <View>
      <Text>This is the launch page</Text>
      <Text>Welcome to UNIMART!</Text>
      <Button title="Sign Up" onPress={() => router.navigate("/signup")} />
      <Button title="Login" onPress={() => router.navigate("/home")} />
      <Button title="Go to Home Page" onPress={() => router.navigate("/home")} />

      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Account" component={AccountPage}/>
        <Tab.Screen name="Sell" component={SellPage}/>
      </Tab.Navigator>
    </View>
  );
}
