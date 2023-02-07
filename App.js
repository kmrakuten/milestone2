import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserScreen from './components/UserScreen';
import AccountScreen from './components/AccountScreen';
import DashboardScreen from './components/DashboardScreen';
import LoginScreen from './components/LoginScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Catalog">
        <Tab.Screen name="User" component={UserScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
