import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoodList } from '../slices/foodSlice';
import { useNavigation } from '@react-navigation/native'; // Use useNavigation to get the navigation prop

const FoodList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Access navigation prop
  const foodList = useSelector((state) => state.food.foodList);
  const loading = useSelector((state) => state.food.loading);
  const error = useSelector((state) => state.food.error);
  const [filter, setFilter] = useState('All'); // Trạng thái lọc

  useEffect(() => {
    dispatch(fetchFoodList());
  }, [dispatch]);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error}</Text>;

  if (foodList.length === 0) return <Text>No food items available.</Text>;

  const handlePress = (item) => {
    navigation.navigate('BikeDetail', { bike: item });
  };

  // Lọc danh sách theo loại xe
  const filteredList = foodList.filter((item) => {
    if (filter === 'All') return true;
    return item.type === filter;
  });

  const handleAddProduct = () => {
    // Navigate to a screen where the user can add a new product (e.g., AddProductScreen)
    navigation.navigate('AddProduct');  // Update with your actual screen name
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The World’s Best Bike</Text>

      {/* Nút lọc */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setFilter('All')}>
          <Text style={[styles.filterText, filter === 'All' && styles.activeFilter]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'Roadbike' && styles.activeFilter]}
          onPress={() => setFilter('Roadbike')}>
          <Text style={[styles.filterText, filter === 'Roadbike' && styles.activeFilter]}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'Mountain' && styles.activeFilter]}
          onPress={() => setFilter('Mountain')}>
          <Text style={[styles.filterText, filter === 'Mountain' && styles.activeFilter]}>Mountain</Text>
        </TouchableOpacity>
      </View>

      {/* Danh sách xe */}
      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.id.toString()} // Ensure id is a string
        numColumns={2}
        renderItem={({ item }) => {
          const imgUri = item.img || 'https://via.placeholder.com/250'; // Default image if none exists
          return (
            <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
              <Image source={{ uri: imgUri }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.type}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {/* Button to add a new product */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
        <Text style={styles.addButtonText}>Add New Product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#E94141',
    marginStart: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E9414187',
    backgroundColor: '#ffffff',
  },
  activeFilter: {
    color: '#E94141', // Màu cho nút được chọn
  },
  filterText: {
    color: '#BEB6B6',
    fontWeight: 'bold',
  },
  item: {
    flex: 1,
    backgroundColor: '#F7BA8326',
    borderRadius: 10,
    margin: 8,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  info: {
    alignItems: 'center',
  },
  type: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    color: '#000000',
  },
  addButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#E94141',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FoodList;
