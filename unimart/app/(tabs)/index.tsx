import React from 'react';
import { router } from "expo-router";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

const textbooks = new Array(8).fill({
  title: 'English Txt',
  price: '$40',
  image: require('@/assets/images/react-logo.png'), // You must place the image here
});

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>UNIMART Home Page</Text>

      <View style={styles.topButtons}>
        <TouchableOpacity style={styles.button} onPress={() => router.navigate("/createlisting")}><Text style={styles.buttonText}>Sell</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.navigate("/account")}><Text style={styles.buttonText}>Account</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.navigate("/login")}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.navigate("/signup")}><Text style={[styles.buttonText]}>Sign Up</Text></TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for textbooks now...."
          style={styles.searchInput}
        />
        <Button title="Search" onPress={() => {}} />
      </View>

      <FlatList
        data={textbooks}
        numColumns={2}
        contentContainerStyle={styles.bookGrid}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.navigate("/listing")}>
            <View style={styles.bookItem}>
            <Image source={item.image} style={styles.bookImage} />
            <View style={styles.bookLabel}>
              <Text style={styles.bookText}>{item.title} : {item.price}</Text>
            </View>
          </View>
          </TouchableOpacity>

        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 26, fontWeight: '600', marginVertical: 20 },
  topButtons: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8 },
  button: {
    backgroundColor: '#264F9D',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    margin: 4,
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
  searchContainer: { flexDirection: 'row', marginVertical: 16, alignItems: 'center' },
  searchInput: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    width: 220,
    marginRight: 8,
  },
  bookGrid: { paddingBottom: 100 },
  bookItem: {
    margin: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    width: 140,
  },
  bookImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  bookLabel: {
    backgroundColor: '#666',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 4,
  },
  bookText: { color: 'white' },
});

