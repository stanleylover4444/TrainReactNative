import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from './src/srceens/ProductSrceens/index'; 
import ChooseColorProDuctSrceen from './src/srceens/ChooseColorPructSrcreen/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductScreen">
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="ChooseColorProDuctSrceen" component={ChooseColorProDuctSrceen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;