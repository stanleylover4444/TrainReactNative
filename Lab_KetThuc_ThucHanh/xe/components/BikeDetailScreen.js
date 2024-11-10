// src/components/BikeDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const BikeDetailScreen = ({ route }) => {
    // Get the bike data from route params with error handling
    const { bike } = route.params || {}; 

    // Check if bike data exists, otherwise show a message
    if (!bike) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>No bike details available.</Text>
            </View>
        );
    }

    // Set a fallback image URL if bike.img is missing
    const imgUri = bike.img || 'https://via.placeholder.com/250';

    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <Image source={{ uri: imgUri }} style={styles.image} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.name}>{bike.name}</Text>
                    <Text style={styles.type}>{bike.type}</Text>
                    <Text style={styles.price}>${bike.price}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f7f7f7',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 6,
        padding: 16,
        marginBottom: 20,
        alignItems: 'center',
    },
    image: {
        width: 280,
        height: 280,
        borderRadius: 15,
        marginBottom: 16,
    },
    detailsContainer: {
        alignItems: 'center',
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    type: {
        fontSize: 18,
        color: '#555',
        marginBottom: 10,
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#E94141',
    },
    errorText: {
        fontSize: 18,
        color: '#E94141',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default BikeDetailScreen;
