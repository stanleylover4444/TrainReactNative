import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store';
import FoodList from './components/FoodList';
import BikeDetailScreen from './components/BikeDetailScreen';
import Home from "./components/Home"
import AddProductScreen from "./components/AddProductScreen"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BikeList"
            component={FoodList}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="BikeDetail"
            component={BikeDetailScreen}
            options={{ title: 'Bike Details' }}
          />

            <Stack.Screen
            name="AddProduct"
            component={AddProductScreen}
         options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
