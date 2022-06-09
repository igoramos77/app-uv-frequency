import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';
import MySends from '../screens/MySends';
import Lesson from '../screens/Lesson';

//const { Navigator, Screen } = createBottomTabNavigator();
const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRouts() {

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
      <Screen
        name="Disciplina"
        component={Lesson}
      />
    </Navigator>
  );
}
