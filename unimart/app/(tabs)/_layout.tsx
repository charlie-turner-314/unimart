import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    < Tabs screenOptions={{ tabBarActiveTintColor: 'blue'}}>
      <Tabs.Screen
        name="index"
        options={{ title: 'Home',
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size} /> ),
         }}
      />
      <Tabs.Screen
        name="createlisting"
        options={{ title: 'Create Listing',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size} /> ),
         }}
      />
      <Tabs.Screen
        name="account"
        options={{ title: 'My Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={size} /> ),
         }}
      />
    </Tabs>
  );
}
