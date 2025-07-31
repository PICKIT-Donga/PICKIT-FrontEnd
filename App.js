import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './components/Navigator/BottomNavigator.js';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}