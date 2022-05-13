import React, { useCallback, useEffect, useState } from 'react';
const {Navigator, Screen} = createStackNavigator();

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';

export function AuthRoutes() {

  return (
    <Navigator>
      <Screen name="Login" component={Login} options={{headerShown: false,}} />
    </Navigator>
  )
}