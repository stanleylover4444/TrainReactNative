// UI/index.js
import React from 'react';
import { View, TouchableOpacity, TextInput, Text, Image } from 'react-native';
import styles from '../MainSrceens/style';

const imageSource = require('../../assets/book.png');


const CartScreen = () => {




  return (

    <View style={styles.container}>

      <View style={styles.containerItemFirst}>


      <View style={styles.containerItemFirstHozi}>
      <Image source={imageSource} style={styles.imageOne} />
  

    
      <View style={styles.containerItemFirstChildren}>
      
      

      <Text style={{ fontWeight: 'bold' , fontSize:12 , color : "black",  }}>Nguyên hàm tích phân và ứng dụng</Text>
      <Text style={{ fontWeight: 'bold' , fontSize:12 , color : "black" ,paddingTop : 10   }}>Cung cấp bởi Tiki Trading</Text>
      

      <Text style={styles.newPrice}  >141.800 đ</Text>
      <Text style={styles.oldPrice}  >141.800 đ</Text>
      
      <View style={styles.containerItemFirstChildren2}>
      <TouchableOpacity
            style={[styles.buttonAdd]}

          >
          <Text style={{ fontWeight: 'bold' , fontSize:20 , color : "black"  }}>-</Text>

          </TouchableOpacity>
<Text style={{ fontWeight: 'bold' , fontSize:20 , paddingHorizontal : 10 , color : "black" }}>1</Text>
          <TouchableOpacity
            style={[styles.buttonAdd]}

          >
           <Text style={{ fontWeight: 'bold' , fontSize:20 , color : "black"  }}>+</Text>

          </TouchableOpacity>

          <Text style={{ fontWeight: 'bold' , fontSize:15 , paddingTop : 5,
             color : "blue" , marginStart : 40,  }}>Mua sau</Text>
      </View>
      </View>
  
      </View>
        
      <View style={styles.containerItemFirstHozi1}>
      <Text style={{ fontWeight: 'bold' , fontSize:15 , paddingTop : 5,
             color : "black" , marginStart : 40,  }}>Mã giảm giá đã lưu</Text>
      <Text style={{ fontWeight: 'bold' , fontSize:15 , paddingTop : 5,
             color : "blue" , marginStart : 40,  }}>Xem tại đây</Text>
</View>

<View style={styles.containerItemFirstHozi1}>

<View style={styles.inputContainer}>
       
        <TextInput
          style={{color : "black" , fontWeight : 'bold'}}
          placeholder="Nhập mã giảm giá"
          placeholderTextColor="black" 
          fontWeight ="bold"
          
      
        />
     
      </View>
      
       <TouchableOpacity
            style={[styles.buttonApply]}

          >
           <Text style={{ fontWeight: 'bold' , fontSize:20 ,
             color : "white"   }}>Áp dụng</Text>
          </TouchableOpacity>
</View>
  
      </View>
      
    



      <View style={styles.containerItemSecond}>
        <Text style={styles.TextItemSecond1}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        
        <Text style={styles.TextItemSecond2}>Nhập tại đây?</Text>
      </View>


      <View style={styles.containerItemThree}>

        <Text style={styles.TextItemThree1}>Tạm tính</Text>
        <Text style={styles.TextItemThree2}>141.800 đ</Text>

      </View>

      <View style={styles.containerItemFour}>


        <View style={styles.containerItemFour1}>
          <Text style={styles.TextItemFour1}>Thành Tiền</Text>
          <Text style={styles.TextItemFour2}>141.800 đ</Text>

        </View>

        <View >
          <TouchableOpacity
            style={[styles.button]}

          >
            <Text style={styles.buttonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
          </TouchableOpacity>
        </View>


      </View>





    </View>


  );
};



export default CartScreen;
