import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop : 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imgProduct:{
    height:381,
    width:301,
  },
  containerHozi : {
    flexDirection : "row",
    justifyContent : 'center',
    alignItems: 'center',
    justifyContent : "space-between"
    
  },
  containerStar : {
  marginEnd : 70,
    flexDirection : "row",
    justifyContent : 'center',
    alignItems: 'center',
  },
  buttonChoseColor: {
  marginTop : 20,
    backgroundColor: "white",
    height: 35, 
    width: "85%",
   
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 10, 
    borderWidth: 1,        // Độ dày của viền
    borderColor: '#000000', // Màu sắc của viền (đen)
    
  },
  buttonPickUp
  : {
    marginTop : 20,
      backgroundColor: "red",
      height: 45, 
      width: "88%",
     
      alignItems: 'center', 
      justifyContent: 'center', 
      borderRadius: 10, 
     
      
    },


        
});

export default styles;
