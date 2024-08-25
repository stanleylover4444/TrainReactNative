import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListProductSrceen from './src/srceens/ListProduct/index'; 
import ListSeenSrceen from './src/srceens/ListSeen/';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListProductSrceen">
        <Stack.Screen name="ListProductSrceen" component={ListProductSrceen} />
        <Stack.Screen name="ListSeenSrceen" component={ListSeenSrceen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;