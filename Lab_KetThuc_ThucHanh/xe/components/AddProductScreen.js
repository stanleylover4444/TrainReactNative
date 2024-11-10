// src/components/AddProductScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addFood } from '../slices/foodSlice'; // Import addFood action

const AddProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  // States for input fields
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = () => {
    if (!name || !price || !type || !img) {
      Alert.alert('Error', 'Please fill out all fields!');
      return;
    }

    // Create new product object
    const newProduct = {
      name,
      price,
      type,
      img,
    };

    // Dispatch action to add product to the Redux store and API
    dispatch(addFood(newProduct))
      .unwrap()  // Optional, to handle success or error in a .then/.catch chain
      .then(() => {
        Alert.alert('Success', 'Product added successfully!');
        navigation.goBack(); // Go back to previous screen after adding product
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Product</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Product Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Product Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Product Type (e.g., Roadbike)"
          value={type}
          onChangeText={setType}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Product Image URL"
          value={img}
          onChangeText={setImg}
          placeholderTextColor="#888"
        />
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#E94141',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 12,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  button: {
    backgroundColor: '#E94141',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddProductScreen;
