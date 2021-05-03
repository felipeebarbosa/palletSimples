import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';

export default function App() {
  const [text, setText] = useState('');
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        barStyle="dark-content"
      />
      <MainStack></MainStack>
    </NavigationContainer>
  );
}
