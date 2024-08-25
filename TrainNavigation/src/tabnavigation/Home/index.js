import React from 'react';
import { View, Image } from 'react-native';
import styles from './style';
import Animated from 'react-native-reanimated';



const Home = () => {

  const imageSource = require('../../assets/R.png');
  return (
    <View style={styles.container}>
     
       
       <Animated.Image
      source={imageSource}
        style={{ width: 300, height: 300 }}
        sharedTransitionTag="tag"
      />
     
    </View>
  );
};

export default Home;
