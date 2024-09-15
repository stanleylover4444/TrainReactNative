import React, { useState ,useEffect  } from 'react'; // Thêm import useState
import { View, Text, TouchableOpacity , Button , TextInput} from 'react-native';
import styles from './style';
import Animated from 'react-native-reanimated';
import CustomButton from '../../component/button'; // Đảm bảo bạn có định nghĩa đúng component CustomButton

const Home = ({ navigation }) => {
  const imageSource = require('../../assets/R.png');
  const imgAppel = require('../../assets/a.jpg');

  const [message, setMessage] = useState('Chàso bạn!');

  const handlePress = () => {
    setMessage('Nút đã được nhsấn!');
  };

  const handlePress1 = () => {
    setMessage('Nút đã đưn!');
  };

  const [text, setText] = useState('');

  const [isVisible, setIsVisible] = useState(1000);

  const [seconds, setSeconds] = useState(10000);



  

  const navigateToDetails = (tag, source, name, price, description) => {
    navigation.navigate('Details', {
      tag,
      source,
      name,
      price,
      description,
    });
  };

  return (
    <View style={styles.container}>




 

      {/* <TouchableOpacity
        onPress={() =>
          navigateToDetails('tag1', imageSource, 'Product 1', '$100', 'This is the first product.')
        }
      >
        <Text style={styles.message}>{message}</Text>
        <Animated.Image
          source={imageSource}
          style={{ width: 200, height: 200 }}
          sharedTransitionTag="tag1"
        />
      </TouchableOpacity> */}
 {/* <TextInput
        placeholder="Nhập tên của bạn"
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <Text>Hello, {text}!</Text> */}
      {/* <CustomButton 
        title="Sign Ussp" 
        onPress={handlePress}
        textColor="#fff"
      /> */}
     
     {/* <CustomButton 
        title="Sign Ussssp" 
        onPress={() => navigation.openDrawer()}
        textColor="#fff"
      /> */}
     
     

      {/* Uncomment nếu cần sử dụng */}
      <TouchableOpacity
        onPress={() =>
          navigateToDetails('tag2', imgAppel, 'Product 2', '$200', 'This is the second product.')
        }
      >
        <Animated.Image
          source={imgAppel}
          style={{ width: 200, height: 200 }}
          sharedTransitionTag="tag2"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
