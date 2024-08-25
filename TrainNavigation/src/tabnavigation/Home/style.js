// style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor :  "orange"
    },
    button: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    modalContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)', // Nền mờ
    },
    modalContent: {
      flex: 1,
      width: '100%', // Chiếm toàn bộ chiều rộng
      padding: 20,
      backgroundColor: 'yellow',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    imageOne:{
      height : 300,
      width : 300
    }
  });
  
  
export default styles;
