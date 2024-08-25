
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:100,
    backgroundColor: 'white', // Light blue

  },
  titleStart:{
      fontWeight : 'bold',
      color : "black",
      fontSize : 20,
  },


  

  padingText:{
    alignItems: 'center',
    paddingTop: 50,
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
 

  
 
  buttonContainer: {
    paddingTop:60,
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
  buttonTextLogin: {
    paddingTop : 10,
    fontWeight: 'bold',
    color: 'red',
    fontSize: 20,
    marginStart : 85,
   
  },
  inputContainer: {marginVertical : 10,
    paddingHorizontal:10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
   
   
  },

  input: {
    flex: 1,
    fontSize: 16,
  },
 
  titleEnd : {
    
  }








  
});

export default styles;
