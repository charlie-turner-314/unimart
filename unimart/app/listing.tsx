// app/listing.tsx
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ListingPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Back to Search" onPress={() => router.back()} />
      <Text style={styles.title}>UNIMART – Listing Page</Text>
      <Image
        source={require('@/assets/images/react-logo.png')} // Adjust if image path differs
        style={styles.image}
      />
      <Text style={styles.price}>$40</Text>
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
