// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/srceens/MainSrceens/index'; // Đường dẫn đến TwoButtonScreen

import SignUpSrceen from './src/srceens/SignUpSrceen';
import LoginSrceens from './src/srceens/LoginSrceen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="LoginSrceens" component={LoginSrceens} />
        <Stack.Screen name="SignUpSrceen" component={SignUpSrceen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
