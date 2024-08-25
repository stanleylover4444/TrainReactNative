import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import your screens
import Home from './src/tabnavigation/Home';
import Setting from './src/tabnavigation/Setting';
import Notifications from './src/drawernavigation/Notifications';
import Profile from './src/drawernavigation/Profile';
import Details  from './src/tabnavigation/Details';

// Create navigators
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarBadge: 1, 
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
         
        }}
      />
    </Tab.Navigator>


  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Hofme" screenOptions={{drawerPosition: ''}}   >
      <Drawer.Screen name="Homse" component={MyTabs} options={{  headerShown : false,
         
          headerStyle: {
            backgroundColor: 'gray',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}/>
      <Drawer.Screen name="Notifications" component={Notifications}  />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
