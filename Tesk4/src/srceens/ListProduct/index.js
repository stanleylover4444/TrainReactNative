import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './style';
import Product from './product';

// Dữ liệu mẫu cho FlatList với các URL hình ảnh
const data = [
  { id: '1', name: 'Iphone 1', brand: 'Apple', price: '$999', oldprice: '$1199', productImage: 'https://hc.com.vn/i/ecommerce/media/ckeditor_3370949.jpg' },
  { id: '2', name: 'Samsung 2', brand: 'Samsung', price: '$799', oldprice: '$899', productImage: 'https://cdn.nguyenkimmall.com/images/detailed/836/10053766-dien-thoai-samsung-galaxy-a23-5g-4gb-128gb-xanh-1.jpg' },
  { id: '3', name: 'Iphone 3', brand: 'Apple', price: '$1099', oldprice: '$1299', productImage: 'https://th.bing.com/th/id/OIP.99qJd0KiYicICEzUQ8l13wAAAA?rs=1&pid=ImgDetMain' },
  { id: '4', name: 'Iphone 4', brand: 'Apple', price: '$1199', oldprice: '$1399', productImage: 'https://cdn.nguyenkimmall.com/images/detailed/670/10044325-dien-thoai-iphone-11-128gb-xanh-la-1.jpg' },
 

  { id: '5', name: 'Iphone 4', brand: 'Apple', price: '$1199', oldprice: '$1399', productImage: 'https://cdn.nguyenkimmall.com/images/detailed/670/10044325-dien-thoai-iphone-11-128gb-xanh-la-1.jpg' },
  
];

const ListProductSrceen = () => {

  // Hàm để render mỗi mục trong FlatList
  const renderItem = ({ item }) => (
    <Product
      name={item.name}
      brand={item.brand}
      price={item.price}
      oldprice={item.oldprice}
      productImage={item.productImage}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}  // Thay đổi số cột ở đây
        columnWrapperStyle={{ justifyContent: 'space-between' }}  // Đặt khoảng cách giữa các cột
      />
    </View>
  );
};

export default ListProductSrceen;
