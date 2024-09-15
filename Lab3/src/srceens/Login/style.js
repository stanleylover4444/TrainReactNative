// UI/style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   padding: 30,
    backgroundColor: '#FFFFFF', 

  },
  titleText :  {
    color: 'black',
    fontWeight : 'bold',
    fontSize : 30,
    paddingTop:30,
   
   
  },
  inputContainer: {marginVertical : 10,
    paddingHorizontal:10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
   
   
  },
  imageOne: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  inputContainerItemALll : {
    paddingTop: 10,
  }, 
  buttonContainer : {
    paddingTop: 10,
  },
  button: {
    backgroundColor:"#E53935",
    width: "100%", // Set the desired width
    height: 50, // Set the desired height
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 2, // Adjust radius for rounded corners
    
  },
  buttonText :{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
   
  },
  containerEnd: {
   
    alignItems: 'center', // Căn giữa theo chiều ngang
   
  },

  titleStart : {
   
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  titleEnd : {
   paddingTop:50,
  
    color: 'black',
    fontSize: 15,
  }

  
});

export default styles;
