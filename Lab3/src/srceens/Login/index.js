// UI/index.js
import React from 'react';
import { View,
     Text,  
     Image, 
     TouchableOpacity

} from 'react-native';
import styles from '../Login/style';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
const imageSource = require('../../assets/img/R.png');




function LoginSrceens() {




  return (
    <View style={styles.container}>


      <Text style={styles.titleText}> Login </Text>

  <View style={styles.inputContainerItemALll}>
      <View style={styles.inputContainer}>
        <Image source={imageSource} style={styles.imageOne} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="black" 
      
        />
     
      </View>

      <View style={styles.inputContainer}>
        <Image source={imageSource} style={styles.imageOne} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="black"
        />
        <Image source={imageSource} style={styles.imageOne} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'black' }]}
        
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
       
      </View>

    <View style={styles.containerEnd}>
      <Text style={styles.titleEnd}> CREATE ACCOUNT </Text></View>
      </View>
    </View>
  




  );
}



export default LoginSrceens;
