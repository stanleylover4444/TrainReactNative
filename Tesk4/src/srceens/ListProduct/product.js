import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// Component Product nhận các props từ ListProductSrceen
const Product = ({ name, brand, price, oldprice, productImage }) => {
  return (
    <View style={{ backgroundColor : "white" ,  padding: 10, borderBottomWidth: 10,width: '49%', borderBottomColor: 'gray' }}>



        <TouchableOpacity>
        <View style={{flexDirection:'row'}}>

        <View><Image style={{ height: 100, width: 100 }} source={{ uri: productImage }}/></View>
     
      <View>

      <Text style={{color : "black", fontWeight :"bold"}}>{name}</Text>
      <Text >{brand}</Text>
      <Text style={{color : "red", fontWeight :"bold"}}>{price }</Text>
      <Text style={{ textDecorationLine: 'line-through', color : "gray", fontWeight :"bold" }}>{oldprice}</Text>
      </View>
      </View>
      </TouchableOpacity>
      </View>
    
  );
};

export default Product;
