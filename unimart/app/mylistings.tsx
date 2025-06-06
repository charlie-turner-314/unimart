import React from 'react';
import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function MyListings() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Your Listings</Text>

      <Button title="Create New Listing" onPress={() => router.navigate("/createlisting")}/>
      <Button title="Edit Existing Listings" onPress={() => router.navigate("/editlisting")}/>
    </View>
  );
}
