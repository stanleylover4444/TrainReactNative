import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './style';
import Animated from 'react-native-reanimated';

const Details = ({ route, navigation }) => {
    
  const { tag, source, name, price, description } = route.params;

  return (
    <View style={styles.container}>
      <Button title="Quay lại" onPress={() => navigation.goBack()} />
      <Animated.Image
        source={source}
        style={{ width: 500, height: 500 }}
        sharedTransitionTag={tag}
      />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>{price}</Text>
      <Text style={styles.productDescription}>{description}</Text>
    </View>
  );
};

export default Details;
