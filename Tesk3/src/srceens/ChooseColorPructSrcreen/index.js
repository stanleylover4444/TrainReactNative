// UI/index.js
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const imageVSblack = require("../../assets/vs_black.png")

const imageVSblue = require("../../assets/vs_blue.png")

const imageVSred = require("../../assets/vs_red.png")

const imageVSilver = require("../../assets/vs_silver.png")


const ChooseColorProDuctSrceen = () => {


  const [currentImage, setCurrentImage] = useState(imageVSblack);
  const [currentColor, setCurrentColor] = useState("Đen");
  const [currentPrices, setCurrentPrice] = useState("1.790.000 đ");
  const [currentOldPrices, setCurrentOldPrice] = useState("1.890.000 đ");

const navigate  = useNavigation();

const handleButtonChooseColor  = () => {
  navigate.navigate('ProductScreen');
};


  return (




    <View style={styles.containerFirst}>

      <View style={styles.containerItem}>


        <View style={styles.containerHozi} >

          <Image source={currentImage} style={styles.imgproduct}></Image>

          <View >
            <View>
              <Text
                style={{ width: 200, fontSize: 18, color: "black", fontWeight: "bold", paddingTop: 10, marginStart: 22 }}
                numberOfLines={2} // Giới hạn văn bản hiển thị trong 2 dòng
              >
                Điện Thoại Vsmart Joy 3 Hàng chính hãng
              </Text>
              <View style={styles.containerHoziText}>
                <Text style={{ marginStart: 10, fontWeight: "bold", color: "black", fontSize: 18 }}> Màu :  </Text>
                <Text style={{ marginStart: 10, fontWeight: "bold", color: "black", fontSize: 18 }}>  {currentColor} </Text>
              </View>


              <View style={styles.containerHoziText}>
                <Text style={{ marginStart: 10, fontWeight: "bold", color: "black", fontSize: 18, color: "red" }}> Giá :  </Text>
                <Text style={{ marginStart: 10, fontWeight: "bold", color: "black", fontSize: 18, color: "red" }}>  {currentPrices} </Text>
              </View>

              <View style={styles.containerHoziText}>
                <Text style={{ marginStart: 10, fontWeight: "bold", color: "black", fontSize: 18 }}> Giá cũ :  </Text>
                <Text style={{ marginStart: 10, fontWeight: "bold", color: "black", fontSize: 18, textDecorationLine: 'line-through', color: "gray" }}>  {currentOldPrices} </Text>
              </View>


            </View>

          </View>


        </View>


      </View>
      <View style={styles.containerSecond} >

        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}> Chọn một màu bên dưới : </Text>

        <View style={styles.containerHoziSecond}>
          <TouchableOpacity
            style={[styles.buttonChoose, { backgroundColor: "white" }]}
            onPress={() => {
              setCurrentImage(imageVSred);
              setCurrentColor("Đỏ");
              setCurrentPrice("2.000.000 đ");
              setCurrentOldPrice("2.100.000 đ");
            }}
          >

            <Image source={imageVSred} style={styles.imgproductChoose}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonChoose, { backgroundColor: "white" }]}
            onPress={() => {
              setCurrentImage(imageVSblue);
              setCurrentColor("Xanh");
              setCurrentPrice("1.500.000 đ");
              setCurrentOldPrice("1.800.000 đ");
            }}
          >
            <Image source={imageVSblue} style={styles.imgproductChoose}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.containerHoziSecond}>
          <TouchableOpacity
            style={[styles.buttonChoose, { backgroundColor: "white" }]}
            onPress={() => {
              setCurrentImage(imageVSblack);
              setCurrentColor("Đen");
              setCurrentPrice("1.790.000 đ");
              setCurrentOldPrice("1.900.000 đ");
            }}
          >
            <Image source={imageVSblack} style={styles.imgproductChoose}></Image>

          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonChoose, { backgroundColor: "white" }]}
            onPress={() => {
              setCurrentImage(imageVSilver);
              setCurrentColor("Bạc");
              setCurrentPrice("1.900.000 đ");
              setCurrentOldPrice("2.000.000 đ");
            }}
          >

            <Image source={imageVSilver} style={styles.imgproductChoose}></Image>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.buttonDone}
          onPress={handleButtonChooseColor}
       
       
         
        >
         
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}> Xong</Text>
        </TouchableOpacity>
      </View>




    </View>
  );
};

export default ChooseColorProDuctSrceen;