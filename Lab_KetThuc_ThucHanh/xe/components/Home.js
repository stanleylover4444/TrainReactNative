import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation

const Home = () => {
  const navigation = useNavigation(); // Get navigation prop

  const handlePress = () => {
    // Navigate to the BikeList screen when the button is pressed
    navigation.navigate('BikeList');
  };

  return (
    <View style={styles.container}>
      <Text  style={styles.buttonText1}>A premium online store for</Text>
      <Text  style={styles.buttonText1}>sporter and their stylish choice</Text>
      <View style={{ backgroundColor: '#E941411A', borderRadius: 50 }}>
        <Image source={require('../1.png')} style={styles.image} />
      </View>
      <Text  style={styles.buttonText1}>POWER BIKE</Text>
      <Text  style={styles.buttonText1}>SHOP</Text>

      {/* Button to navigate */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  image: {
    margin: 10,
    width: 292,
    height: 270,
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#E94141', // Button color
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonText1: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Home;
