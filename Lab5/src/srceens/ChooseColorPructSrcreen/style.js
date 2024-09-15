import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerFirst: {
    paddingTop : 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerItem : {
   height : 170,
    width: "100%",
    backgroundColor: 'white',
  },
  productTitle:{
    width : 150,
    marginStart  : 10,
    fontWeight : "bold", 
    color : "black"
  },
  containerHozi : {
    paddingTop : 10,
    marginStart : 10,
   flexDirection : "row"
  },
  containerHoziText : {
  
    marginStart : 8,
   flexDirection : "row"
  },
  containerHoziSecond : {
    paddingTop : 10,
   flexDirection : "row"
  },
  imgproduct : {
    borderRadius : 10,
    height : 132,
     width: 107,
     backgroundColor: 'black',
   },
   imgproductChoose : {
    borderRadius : 10,
    height : 100,
     width: 80,
     backgroundColor: 'black',
   },

   containerSecond: {
   width : "100%",

    flex: 2,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  buttonChoose : {
      marginTop : 20,
      height: 120, 
      marginHorizontal: 5, // Tạo khoảng cách ngang giữa các nút
      width: 150,
      alignItems: 'center', 
      justifyContent: 'center', 
      borderRadius: 10,  
    },
    buttonDone:{backgroundColor : "red" , height : 50, width : "80%" , marginTop : 100 ,
        justifyContent : 'center' , alignItems : "center" , borderRadius : 20},

});

export default styles;
