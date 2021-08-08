import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './pages/Splash';
import LoginPages from './pages/LoginPages'
import RegisterPages from './pages/RegisterPages'
import HomeScreen from './pages/HomeScreen';
import Router from './Router';


export default function App() {
  return (
      <Router/>
  );
}


