import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from '../screens/Products';
import {Svgs} from '../assets';
import Categories from '../screens/Categories';
import Cart from '../screens/Cart';
import {Colors, Typography} from '../styles';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.BLACK,
        tabBarInactiveTintColor: Colors.YELLOW,
        tabBarLabelStyle: {
          fontSize: Typography.FS11,
          fontWeight: '700',
        },
      }}>
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({color, size}) => <Svgs name="Categories" />,
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({color, size}) => <Svgs name="products" />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => <Svgs name="addcart" />,
        }}
      />
    </Tab.Navigator>
  );
}
