// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TwoButtonScreen from './src/srceens/MainSrceens/index'; // Đường dẫn đến TwoButtonScreen
import LoginScreen from './src/srceens/Login/index'; // Đường dẫn đến LoginScreen
import SignUpScreen from './src/srceens/SignUP/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TwoButtonScreen">
        <Stack.Screen name="TwoButtonScreen" component={TwoButtonScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
