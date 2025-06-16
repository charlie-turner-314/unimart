import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';
import React, { useState } from 'react';

export default function EditListingPage() {
  const router = useRouter();
  const [price, setPrice] = useState('');

  return (
    <View style={styles.container}>
      <Button title="Back to Search" onPress={() => router.back()} />
      <Text style={styles.title}>UNIMART Edit Listing page</Text>
      <Image
        source={require('@/assets/images/react-logo.png')} // Adjust if image path differs
        style={styles.image}
      />
      <TextInput placeholder='$40' style={styles.price} value={price} onChangeText={setPrice}/>
      <Text style={styles.details}>
        This book is great, got me through EGB120! Great condition. Looking to sell soon.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  image: { width: 200, height: 200, resizeMode: 'contain', marginVertical: 20 },
  price: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  details: { fontSize: 16 },
});
