import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';
import { Platform } from 'react-native';
import MySends from '../screens/MySends';
import { useNavigation } from '@react-navigation/native';

//const { Navigator, Screen } = createBottomTabNavigator();
const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRouts() {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={Dashboard}
      />
      <Screen
        name="Submeter Certificado"
        component={Register}
      />
      <Screen
        name="MySends"
        component={MySends}
      />
    </Navigator>
  );
}
