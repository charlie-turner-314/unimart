import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function AccountPage() {
  const router = useRouter();

  // You'd typically fetch this from context or storage
  const [user] = useState({
    name: 'Flynn Ross',
    email: 'flynn@example.com',
    university: 'QUT',
    degree: 'Bachelor of Engineering',
    phone: '0412 345 678',
  });

  const handleDeleteAccount = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete your account? This cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => {
          // Later: hook up to real delete logic
          console.log('Account deleted');
          alert('Account deleted (placeholder)');
          router.replace('/'); // Send them back to home or login
        }},
      ]
    );
  };

  const handleViewListings = () => {
    router.push('/mylistings');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Account</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user.name}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{user.phone}</Text>

        <Text style={styles.label}>University:</Text>
        <Text style={styles.value}>{user.university}</Text>

        <Text style={styles.label}>Degree:</Text>
        <Text style={styles.value}>{user.degree}</Text>
      </View>

      <View style={styles.buttonGroup}>
        <Button title="View My Listings" onPress={handleViewListings} />
        <View style={{ height: 15 }} />
        <Button title="Delete My Account" onPress={handleDeleteAccount} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: 'white' },
  header: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  infoBox: { marginBottom: 30 },
  label: { fontSize: 16, fontWeight: '600', marginTop: 10 },
  value: { fontSize: 16, color: '#444' },
  buttonGroup: { marginTop: 20 },
});
