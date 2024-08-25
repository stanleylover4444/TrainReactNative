// UI/style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:100,
    backgroundColor: '#00CCF9', // Light blue

  },


  

  padingText:{
    alignItems: 'center',
    paddingTop: 50,
  },
  imageOne: {
    width: 200, // Đặt chiều rộng của hình ảnh
    height: 200, // Đặt chiều cao của hình ảnh
    
  },
  textstyle: {
    fontWeight: 'bold',
    fontSize: 30, // Đặt kích thước chữ
    color: 'black', // Đặt màu chữ
  },

  textstylesmall: {
    fontWeight: 'bold',
    fontSize: 14, // Đặt kích thước chữ
    color: 'black', // Đặt màu chữ
  },
  buttonContainer : {
    paddingTop:80,
    flexDirection : "row",
    justifyContent:'space-between',
    width: "50%"
  },

  
 
  buttonContainer: {
    paddingTop:100,
    width: '60%',
    flexDirection: 'row',
    justifyContent : 'center',
   
  },
  button: {
    marginHorizontal:50,
    width: 120, // Set the desired width
    height: 50, // Set the desired height
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
    borderRadius: 20, // Adjust radius for rounded corners
    
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
   
  },








  
});

export default styles;
