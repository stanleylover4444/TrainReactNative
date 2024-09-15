import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
  },

  containerItemFirst: {
    height: 340,
    width: '100%',
    backgroundColor: 'white',
  },

  containerItemFirstHozi: {
    height: 210,
    width: '100%',
    paddingTop:10,
    flexDirection: 'row', 
    backgroundColor: 'white',
  },

  containerItemFirstHozi1: {
    width: '100%',
    flexDirection: 'row', 
    backgroundColor: 'white',
    paddingTop:20
  },
  containerItemFirstChildren: {
    height: 210,
    marginStart : 10,
    width: '100%',
    backgroundColor: 'white',
  },
  inputContainer: {
    marginStart  : 30,
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gray',
   
   
  },

  containerItemFirstChildren2: {
    flexDirection:"row",
    paddingTop : 50 ,
    backgroundColor: 'white',
  },
  newPrice : {
   
    fontSize: 20,
  paddingTop : 10,
    fontWeight:"bold",
    color:"#EE0D0D"
  },

  oldPrice : {
   
    fontSize: 15,
    paddingTop : 10,
   textDecorationLine: 'line-through',
    fontWeight:"bold",
    color:"#C4C4C4"
  },

  buttonAdd: {
   
    backgroundColor: "#C4C4C4",
    height: 30, 
    width: 30,
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 2, 
    
  },

  buttonTru: {
    
    backgroundColor: "#E53935",
    height: 20, 
    width: 20,
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 2, 
    
  },

  
  buttonApply: {
   marginStart : 20,
    backgroundColor: "#0A5EB7",
    height: 50, 
    width: 100,
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 2, 
    
  },

 




  containerItemSecond: {
    marginTop: 30,
    paddingTop: 10,
    height: 70,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent:"center"
  },

  TextItemSecond1:{
    
fontWeight:"bold",
color:"black"
  }
,

TextItemSecond2:{
    marginStart:10,
    fontWeight:"bold",
    color:"blue"
      }
    ,

  containerItemThree: {
    marginTop: 30,
    height: 70,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row', 
    alignItems: 'center',
   
  },

  TextItemThree1:{
    fontSize: 24,
    marginStart:10,
    fontWeight:"bold",
    color:"black"
      }
    ,

    TextItemThree2:{
       paddingStart:  170,
        fontSize: 24,
        marginStart:10,
        fontWeight:"bold",
        color:"#EE0D0D"
          }
        ,
  containerItemFour: {
    paddingTop: 20 ,
    marginTop: 80,
    height:170,
    width: '100%',
    backgroundColor: 'white',
    
  },


    containerItemFour1:{
flexDirection :"row"
  },
  TextItemFour1:{
    fontSize: 24,
    marginStart:10,
    fontWeight:"bold",
   
      }
    ,

    TextItemFour2:{
       paddingStart:  140,
        fontSize: 24,
        marginStart:10,
        fontWeight:"bold",
        color:"#EE0D0D"
          }
        ,
        button: {
          marginTop: 40,
          marginStart : 20,
          backgroundColor: "#E53935",
          height: 50, 
          width: "90%",
          alignItems: 'center', 
          justifyContent: 'center', 
          borderRadius: 2, 
          paddingHorizontal: 20,
        },
        buttonText: {
          fontWeight: 'bold',
          color: 'white',
          fontSize: 25,
        },
        imageOne:{  
          marginStart: 20,
          height : 207,
          width : 174

        }
        
});

export default styles;
