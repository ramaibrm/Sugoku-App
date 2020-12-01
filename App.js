import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import store from './store';
import { Provider } from 'react-redux'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Game from './pages/Game';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import {StyleSheet, View } from 'react-native';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} 
              options={{ 
                title: 'Home',
                headerStyle: {
                  backgroundColor: '#f4511e',
              }}} />
            <Stack.Screen name="Game" component={Game}  
              options={{ 
                title: 'Home',
                headerStyle: {
                  backgroundColor: '#EEB736',
              }}} />
          </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}