import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


const imageSource = require("../../assets/vs_black.png")
const imageStar = require("../../assets/star.png")

const ProductScreen = () => {


const navigate  = useNavigation();

const handleButtonChooseColor  = () => {
  navigate.navigate('ChooseColorProDuctSrceen');
};



  return (
    <View style={styles.container} >
   <Image source={imageSource} style={styles.imgProduct} />

   <Text style={{ color : 'black', fontWeight : "bold", fontSize : 18, paddingTop : 14}} >Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      

      <View style={[styles.containerHozi, { paddingTop: 10 }]} >

      <View style={styles.containerStar} >
      <Image source={imageStar} style={styles.imageStar} />
      <Image source={imageStar} style={styles.imageStar} />
      <Image source={imageStar} style={styles.imageStar} />
      <Image source={imageStar} style={styles.imageStar} />
      <Image source={imageStar} style={styles.imageStar} />
      </View>
      
      <Text style={{color : "black" , fontWeight : "bold"}}>(Xem 1000 đánh giá)</Text>
      </View>

      <View style={[styles.containerHozi, { paddingTop: 10 }]} >


      <View style={styles.containerStar} >
      <Text style={{color : "black" ,  fontSize : 20, fontWeight : "bold"}}>1.790.000 đ</Text>
      </View>
      
      <Text style={{color : "gray" , fontWeight : "bold" ,  fontSize : 20,textDecorationLine: 'line-through'}}>1.900.000 đ</Text>
      </View>

      <Text style={{color : "red" , fontWeight : "bold" , fontSize : 13, paddingTop : 10 , paddingEnd : 150}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
      
      <TouchableOpacity
            style={[styles.buttonChoseColor]}
            onPress={handleButtonChooseColor}

          >
           <Text style={{  fontSize:15 , color : "black"  }}>4 Màu-Chọn Màu</Text>

          </TouchableOpacity>

            
      <TouchableOpacity
            style={[styles.buttonPickUp , {marginTop :100}]}
           
          >
           <Text style={{  fontSize:20 , color : "white" , fontWeight : "bold"  }}>Chọn Mua</Text>

          </TouchableOpacity>

    </View>
  );
};

export default ProductScreen;