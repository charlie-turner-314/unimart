import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(home)" />
      <Tabs.Screen name="account" />
      <Tabs.Screen name="createlisting" />
      <Tabs.Screen name="editlisting" />
      <Tabs.Screen name="mylistings" />
      <Tabs.Screen name="listing" />
    </Tabs>
  );
}