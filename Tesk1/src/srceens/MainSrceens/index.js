// UI/index.js
import React from 'react';
import { View, TouchableOpacity, Alert, Text, Image } from 'react-native';
import styles from '../MainSrceens/style';
import { useNavigation } from '@react-navigation/native'; // Nhập useNavigation

const imageSource = require('../../assets/img/R.png');


const TwoButtonScreen = () => {


  const navigation = useNavigation();
  const handleButton1Press = () => {
    navigation.navigate('LoginScreen');
  };

  const handleButton2Press = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.imageOne} />


      <View style={styles.padingText}>
      <Text style={styles.textstyle}>GROW </Text>
      <Text style={styles.textstyle}>YOUR BUSINESS </Text>
      </View>



      <View style={styles.padingText}>
      <Text  style={styles.textstylesmall} >We will help you to grow your business using  </Text>
      <Text  style={styles.textstylesmall} > online server </Text>
      
      </View>




      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#E3C000' }]}
          onPress={handleButton1Press}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#E3C000' }]}
          onPress={handleButton2Press}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default TwoButtonScreen;
