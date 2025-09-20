import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Details from '../screens/Details';
import Products from '../screens/Products';
import {MainAppStackTypes} from './navigation-types';
import BottomTabs from './BottomTabs';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator<MainAppStackTypes>();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
