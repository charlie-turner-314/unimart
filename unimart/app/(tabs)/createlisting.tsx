import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

export default function SellPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isbn, setIsbn] = useState('');
  const [quality, setQuality] = useState('Good – Used');
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    // Later: send to server or local state
    console.log({
      title,
      description,
      isbn,
      quality,
      imageUri,
    });
    alert('Listing Submitted!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a New Listing</Text>

      <TextInput
        placeholder="Listing Name"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        style={[styles.input, { height: 100 }]}
      />

      <TextInput
        placeholder="ISBN"
        value={isbn}
        onChangeText={setIsbn}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.label}>Quality</Text>
      <Picker
        selectedValue={quality}
        onValueChange={(itemValue) => setQuality(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="New" value="New" />
        <Picker.Item label="Good – Used" value="Good – Used" />
        <Picker.Item label="Fair" value="Fair" />
        <Picker.Item label="Poor" value="Poor" />
      </Picker>

      <TouchableOpacity style={styles.imageUpload} onPress={pickImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.imagePreview} />
        ) : (
          <Text style={{ color: '#555' }}>Tap to upload image</Text>
        )}
      </TouchableOpacity>

      <Button title="Submit Listing" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: 'white', flex: 1 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  label: { marginBottom: 5, fontWeight: '500' },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
  },
  imageUpload: {
    height: 150,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
});
